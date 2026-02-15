
import React from 'react';
import { SCHOOL_NAME } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-900 font-bold text-xl">
            ق
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{SCHOOL_NAME}</h1>
        </div>
        <nav className="flex gap-6 text-sm md:text-base overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          <a href="#home" className="hover:text-indigo-200 transition">الرئيسية</a>
          <a href="#admin" className="hover:text-indigo-200 transition whitespace-nowrap">الإدارة</a>
          <a href="#teachers" className="hover:text-indigo-200 transition">المعلمات</a>
          <a href="#schedules" className="hover:text-indigo-200 transition">الجداول</a>
          <a href="#stats" className="hover:text-indigo-200 transition">أوقات الطلاب</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
