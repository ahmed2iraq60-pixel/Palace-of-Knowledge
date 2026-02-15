
import React, { useState } from 'react';
import { GRADE_SCHEDULES } from '../constants';

const ScheduleSection: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState(0);

  return (
    <section id="schedules" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">جدول الحصص الأسبوعي</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {GRADE_SCHEDULES.map((grade, index) => (
            <button
              key={grade.grade}
              onClick={() => setSelectedGrade(index)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedGrade === index 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {grade.grade}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {GRADE_SCHEDULES[selectedGrade].schedules.map((dayData) => (
            <div key={dayData.day} className="bg-gray-50 rounded-xl border border-gray-200 p-4 shadow-sm">
              <h3 className="text-lg font-bold text-indigo-700 border-b border-indigo-100 pb-2 mb-3 text-center">
                {dayData.day}
              </h3>
              <div className="space-y-2">
                {dayData.classes.map((cls) => (
                  <div key={cls.period} className="bg-white p-2 rounded border border-gray-100 flex flex-col items-center">
                    <span className="text-[10px] text-gray-400">الحصة {cls.period}</span>
                    <span className="text-sm font-semibold text-gray-800">{cls.subject}</span>
                    <span className="text-[10px] text-gray-500">{cls.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
