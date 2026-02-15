
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AdminSection from './components/AdminSection';
import TeacherSection from './components/TeacherSection';
import ScheduleSection from './components/ScheduleSection';
import InspirationSection from './components/InspirationSection';
import ChatBot from './components/ChatBot';
import { SCHOOL_NAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-16 relative z-20">
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center border-b-4 border-indigo-500 hover:transform hover:-translate-y-1 transition">
              <span className="text-3xl block mb-2">📅</span>
              <h4 className="font-bold text-gray-800">الجداول</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center border-b-4 border-emerald-500 hover:transform hover:-translate-y-1 transition">
              <span className="text-3xl block mb-2">👩‍🏫</span>
              <h4 className="font-bold text-gray-800">المعلمات</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center border-b-4 border-amber-500 hover:transform hover:-translate-y-1 transition">
              <span className="text-3xl block mb-2">📢</span>
              <h4 className="font-bold text-gray-800">التعاميم</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center border-b-4 border-rose-500 hover:transform hover:-translate-y-1 transition">
              <span className="text-3xl block mb-2">📞</span>
              <h4 className="font-bold text-gray-800">اتصل بنا</h4>
            </div>
          </div>
        </div>

        <InspirationSection />
        <AdminSection />
        <TeacherSection />
        <ScheduleSection />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
              ق
            </div>
            <h3 className="text-xl font-bold">{SCHOOL_NAME}</h3>
            <p className="text-gray-400 mt-2">نحو مستقبل مشرق ومتميز</p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition">تويتر</a>
            <a href="#" className="text-gray-400 hover:text-white transition">انستقرام</a>
            <a href="#" className="text-gray-400 hover:text-white transition">تيليجرام</a>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمدرسة قصر المعرفة</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
