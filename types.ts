
export interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
}

export interface ScheduleEntry {
  period: number;
  time: string;
  subject: string;
}

export interface DaySchedule {
  day: string;
  classes: ScheduleEntry[];
}

export interface GradeSchedule {
  grade: string;
  schedules: DaySchedule[];
}

export interface SchoolStats {
  studentsCount: number;
  teachersCount: number;
  classesCount: number;
}
