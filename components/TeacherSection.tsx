
import React from 'react';
import { TEACHERS } from '../constants';

const TeacherSection: React.FC = () => {
  return (
    <section id="teachers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">كادرنا التعليمي</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            نفخر بنخبة من المعلمات المتميزات اللواتي يكرسن جهودهن لتقديم تعليم عالي الجودة لطلابنا في كافة المراحل.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEACHERS.map((teacher) => (
            <div key={teacher.id} className="group flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover rounded-full border-4 border-indigo-100 group-hover:border-indigo-500 transition-colors shadow-md"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap">
                  {teacher.subject}
                </div>
              </div>
              <h4 className="font-bold text-indigo-900 group-hover:text-indigo-600 transition-colors">
                {teacher.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
