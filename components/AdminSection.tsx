
import React from 'react';
import { DIRECTOR_NAME, TELEGRAM_LINK } from '../constants';

const AdminSection: React.FC = () => {
  return (
    <section id="admin" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-50">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-r-4 border-indigo-600 pr-4">كلمة الإدارة</h2>
            <div className="mb-6">
              <p className="text-gray-600 italic leading-relaxed mb-4">
                "إن رسالتنا في مدرسة قصر المعرفة تتجاوز جدران الفصول الدراسية؛ نحن نبني مستقبلاً ونغرس قيماً سترافق أبنائنا طوال حياتهم."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-indigo-900">{DIRECTOR_NAME}</h4>
                  <p className="text-indigo-600 text-sm">مدير الإدارة</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-bold text-indigo-900 mb-4">قنوات التواصل المباشر:</h4>
              <a 
                href={TELEGRAM_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition shadow-md w-full justify-center md:w-auto"
              >
                <span>تيليجرام الإدارة</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.36-.49 1-.74 3.9-1.69 6.51-2.81 7.83-3.34 3.71-1.43 4.49-1.68 4.99-1.69.11 0 .35.03.51.16.14.11.18.26.2.42.02.08.02.24.01.32z"/>
                </svg>
              </a>
            </div>
          </div>

          <div id="stats" className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">أوقات الطلاب والدوام</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg">
                <span className="text-4xl block mb-2">⏰</span>
                <h5 className="font-bold text-lg">الحضور الصباحي</h5>
                <p className="text-indigo-100">7:15 صباحاً</p>
              </div>
              <div className="bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                <span className="text-4xl block mb-2">🔔</span>
                <h5 className="font-bold text-lg">بداية الحصة الأولى</h5>
                <p className="text-emerald-100">7:30 صباحاً</p>
              </div>
              <div className="bg-amber-600 text-white p-6 rounded-2xl shadow-lg">
                <span className="text-4xl block mb-2">🏫</span>
                <h5 className="font-bold text-lg">نهاية الدوام</h5>
                <p className="text-amber-100">1:00 ظهراً</p>
              </div>
              <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-lg">
                <span className="text-4xl block mb-2">🎒</span>
                <h5 className="font-bold text-lg">إجمالي الطلاب</h5>
                <p className="text-rose-100">أكثر من 450 طالب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;
