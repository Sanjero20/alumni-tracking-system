import { AcadInfo } from '@/types/account';
import { ChangeEvent } from 'react';
import { create } from 'zustand';

const initialCourse: AcadInfo = {
  campus: '',
  college: '',
  program: '',
};

type CourseState = {
  course: AcadInfo;
};

type CourseAction = {
  handleCourse: (e: ChangeEvent<HTMLSelectElement>) => void;
  resetCourse: () => void;
};

export const useCourseStore = create<CourseState & CourseAction>()((set) => ({
  course: initialCourse,

  handleCourse: (event) =>
    set((state: CourseState) => {
      const { name, value } = event.target;

      return {
        course: {
          ...state.course,
          [name]: value,
        },
      };
    }),

  resetCourse: () =>
    set({
      course: initialCourse,
    }),
}));
