import { Dispatch, SetStateAction } from 'react'

export type ComponentProps = {
  saveStep: (data: Record<string, string | number | File | undefined>) => void;
  toggleResume: Dispatch<SetStateAction<boolean>>;
  visibility: boolean;
}

export type UserDataT = {
  fName: string;
  lName: string;
  about: string;
  image: File;
}

export type ExperienceT = {
  company: string;
  title: string;
  details: string;
  location: string;
  from: string;
  to: string;
}

export type EducationT = {
  name: string;
  degree: string;
  details: string;
  grade: string;
  from: string;
  to: string;
}

