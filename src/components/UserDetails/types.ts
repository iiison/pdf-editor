import { Dispatch, SetStateAction } from 'react'

export type UserDataT = {
  fName: string;
  lName: string;
  about: string;
  image: string | ArrayBuffer | null | undefined;
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

export type AllUserDataT = {
  about: Partial<UserDataT>;
  experiences: Partial<ExperienceT>[];
  educations: Partial<EducationT>[];
}

export type ComponentProps = {
  saveStep: (data: Partial<AllUserDataT>) => void;
  toggleResume: Dispatch<SetStateAction<boolean>>;
  visibility: boolean;
}

