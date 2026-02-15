
import React from 'react';
import { INSPIRATION } from '../constants';

const InspirationSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">روح قصر المعرفة</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-r-8 border-indigo-600">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">{INSPIRATION.student.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {INSPIRATION.student.desc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-r-8 border-emerald-500">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">{INSPIRATION.schoolYear.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {INSPIRATION.schoolYear.desc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-r-8 border-amber-500">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">{INSPIRATION.management.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {INSPIRATION.management.desc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-r-8 border-rose-500">
            <div className="text-4xl mb-4">👑</div>
            <h3 className="text-2xl font-bold text-rose-900 mb-4">{INSPIRATION.director.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {INSPIRATION.director.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
