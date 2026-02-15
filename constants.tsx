
import { Teacher, GradeSchedule } from './types';

export const SCHOOL_NAME = "مدرسة قصر المعرفة";
export const DIRECTOR_NAME = "أ. محمد العتيبي";
export const TELEGRAM_LINK = "https://t.me/qasr_almariifa";

// نصوص ملهمة جديدة
export const INSPIRATION = {
  student: {
    title: "طلابنا.. بناة المستقبل",
    desc: "طلابنا هم سنابل المعرفة التي تنمو في حقولنا، في عيونهم نرى بريق الأمل، وبسواعدهم نخطُّ حكاية التفوق. هم ثروتنا الحقيقية واستثمارنا الأغلى في مستقبل الوطن."
  },
  schoolYear: {
    title: "عامٌ من الإنجاز",
    desc: "عامنا الدراسي ليس مجرد أيامٍ تمضي، بل هو رحلةٌ في آفاق الإبداع، محطاتها الجد والاجتهاد، وهدفها الوصول لقمة المجد المعرفي."
  },
  management: {
    title: "إدارةٌ تقود التميز",
    desc: "إدارة مدرسة قصر المعرفة هي المحرك الصامت والقلب النابض، تعمل بدقة وتناغم لتوفير بيئة تعليمية مثالية، شعارها المهنية وهدفها الريادة."
  },
  director: {
    title: "القائد والقدوة",
    desc: "مديرنا هو ربّان السفينة الذي يقودنا نحو شواطئ التميز برؤية ثاقبة، يزرع الطموح في نفوسنا ويذلل الصعاب لنبقى دائماً في المقدمة."
  }
};

export const TEACHERS: Teacher[] = [
  { id: '1', name: 'سارة الأحمد', subject: 'اللغة العربية', image: 'https://picsum.photos/seed/t1/200' },
  { id: '2', name: 'نورة السعيد', subject: 'الرياضيات', image: 'https://picsum.photos/seed/t2/200' },
  { id: '3', name: 'فاطمة العلي', subject: 'العلوم', image: 'https://picsum.photos/seed/t3/200' },
  { id: '4', name: 'ريم المنصور', subject: 'اللغة الإنجليزية', image: 'https://picsum.photos/seed/t4/200' },
  { id: '5', name: 'هيفاء خالد', subject: 'الدراسات الإسلامية', image: 'https://picsum.photos/seed/t5/200' },
];

const DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];
const SUBJECTS = ['لغة عربية', 'رياضيات', 'علوم', 'إنجليزي', 'تربية إسلامية', 'فنية', 'بدنية'];

export const GRADE_SCHEDULES: GradeSchedule[] = Array.from({ length: 6 }, (_, i) => ({
  grade: `الصف ${['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس'][i]}`,
  schedules: DAYS.map(day => ({
    day,
    classes: Array.from({ length: 6 }, (_, p) => ({
      period: p + 1,
      time: `${7 + p}:30 - ${8 + p}:15`,
      subject: SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)]
    }))
  }))
}));
