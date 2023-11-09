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
  Institution?: string;
  Degree?: string;
  details?: string;
  grade?: string;
  Year?: string;
  from?: string;
  to?: string;
  major?: string;
}

export type Skill = string

export type AllUserDataT = {
  about: Partial<UserDataT>;
  workExperience: Partial<ExperienceT>[];
  Education: Partial<EducationT>[];
  Skills: Skill[];
}

export type ComponentProps = {
  saveStep: (data: Partial<AllUserDataT>) => void;
  toggleResume: Dispatch<SetStateAction<boolean>>;
  visibility: boolean;
  userData: Partial<AllUserDataT>;
}

