
import React, { useState } from 'react';
import { askSchoolAI } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const botResponse = await askSchoolAI(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 h-[450px] rounded-2xl shadow-2xl flex flex-col border border-indigo-100 overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-indigo-900 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">مساعد قصر المعرفة</h3>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-gray-50">
            {messages.length === 0 && (
              <p className="text-center text-gray-400 mt-10">مرحباً! كيف يمكنني مساعدتك اليوم؟</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  m.role === 'user' 
                  ? 'bg-indigo-100 text-indigo-900 rounded-tr-none' 
                  : 'bg-emerald-100 text-emerald-900 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-gray-400 text-xs text-center">جاري التفكير...</div>}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button 
              onClick={handleSend}
              className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-indigo-900 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBot;
