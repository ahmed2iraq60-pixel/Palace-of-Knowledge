
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/school-building/1600/900" 
          alt="مدرسة قصر المعرفة" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          نربي الأجيال بروح <span className="text-yellow-400">التميز</span> والمعرفة
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
          نحن في مدرسة قصر المعرفة نؤمن بأن كل طفل هو قصة نجاح تبدأ من هنا. نوفر بيئة تعليمية آمنة ومحفزة للإبداع والنمو.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#schedules" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-lg">
            عرض الجداول
          </a>
          <a href="#admin" className="bg-white hover:bg-gray-100 text-indigo-900 px-8 py-3 rounded-lg font-bold transition shadow-lg">
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
