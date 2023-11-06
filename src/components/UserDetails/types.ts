import { Dispatch, SetStateAction } from 'react'

export type UserDataT = {
  fName: string;
  lName: string;
  about: string;
  phone: string;
  email: string;
  image: string | ArrayBuffer | null | undefined;
}

export type ExperienceT = {
  Company?: string;
  Duration?: string;
  Position?: string;
  details?: string;
  location?: string;
  skills?: string;
  from?: string;
  to?: string;
}

export type EducationT = {
  name?: string;
  degree?: string;
  details?: string;
  grade?: string;
  from?: string;
  to?: string;
  major?: string;
}

export type AllUserDataT = {
  about: Partial<UserDataT>;
  workExperience: Partial<ExperienceT>[];
  educations: Partial<EducationT>[];
}

export type ComponentProps = {
  saveStep: (data: Partial<AllUserDataT>) => void;
  toggleResume: Dispatch<SetStateAction<boolean>>;
  visibility: boolean;
  userData: Partial<AllUserDataT>;
}

