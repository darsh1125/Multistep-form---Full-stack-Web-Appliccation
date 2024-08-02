export enum genderEnum {
  male = "male",
  female = "female",
  other = "other",
}

export interface IFormInput {
  firstName: string,
  lastName: string,
  age: number,
  email: string,
  gender: genderEnum
}

export interface IFormCreatePassword {
  password: string,
  confirmPassword: string
}

export interface ViewUserInfo {

  firstName: string,
  lastName: string,
  desiganation: string,
  email: string,
  address1: string,
  address2: string,
  phoneNumber: number,
  gender: string,
  zipcode: number,
  state: string,
  city: string,
  relationshipStatus: string,
  dateOfBirth: Date

  schDetails: {
    [key: string | number]: unknown,
    courseName: string,
    instituteName: string,
    passingYear: Date,
    percentage: number,
  }[]

  workExperiences: {
    companyName: string,
    designation: string,
    from: Date,
    to: Date,
  }[]

  languages: {
    languageName: string,
    read: boolean,
    write: boolean,
    speak: boolean,
  }[]

  technologies: {
    technologyLan: string,
    level: string,
  }[]

  referenceContacts: {
    refName: string,
    refContactNumber: number,
    refRelation: string,
  }[]

  preferences: {
    preferanceLocation: string,
    noticePeroid: string,
    expectedCtc: String,
    currentCtc: string,
    department: string,
  }[]


}


export interface IStepFormInput {

  firstName: string,
  lastName: string,
  desiganation: string,
  email: string,
  address1: string,
  address2: string,
  phoneNumber: number,
  gender: string,
  zipcode: number,
  state: string,
  city: string,
  relationshipStatus: string,
  dateOfBirth: Date

  schDetails: {
    [key: string | number]: unknown,
    courseName: string,
    instituteName: string,
    passingYear: Date,
    percentage: number,
  }[]

  workExperiences: {
    companyName: string,
    designation: string,
    from: Date,
    to: Date,
  }[]

  languages: {
    languageName: string,
    read: boolean,
    write: boolean,
    speak: boolean,
  }[]

  technologies: {
    technologyLan: string,
    level: string,
  }[]

  referenceContacts: {
    refName: string,
    refContactNumber: number,
    refRelation: string,
  }[]

  preferences: {
    preferanceLocation: string,
    noticePeroid: string,
    expectedCtc: String,
    currentCtc: string,
    department: string,
  }
  // bCourseName: string
  // bPassingYear: number
  // bUniversityName: string
  // bachelarPercentage: number
  // masterCourseName: string
  // masterPassingYear: number
  // masterPercentage: number
  // masterUniversityName: string

  // workexperience: {
  //   [key: string | number] : unknown
  //   companyName: string,
  //   designation: string,
  //   from: Date,
  //   to: Date
  // }[]

  // languages:{
  //    languageName:string,
  //    skills:string[]
  // }[]

}

export type submitHandlerType =
  {
    schDetails?:
    {
      courseName: string;
      instituteName: string;
      passingYear: Date;
      percentage: string;
    }[] | undefined;

    workExperiences?:
    {
      companyName: string;
      designation: string;
      from: Date;
      to: Date;
    }[] | undefined;

    languages?:
    {
      read?: boolean | undefined;
      write?: boolean | undefined;
      speak?: boolean | undefined;
      languageName: string;
    }[] | undefined;

    technologies?:
    { technologyLan: string; level: string; }[] | undefined;

    referenceContacts?:
    {
      refName: string;
      refContactNumber: string;
      refRelation: string;
    }[] | undefined;
    firstName: string;
    lastName: string;
    desiganation: string;
    email: string;
    address1: string; address2: string;
    phoneNumber: number;
    gender: string;
    zipcode: number;
    state: string;
    city: string;
    relationshipStatus: string;
    dateOfBirth: Date;
    preferanceLocation: string;
    noticePeroid: string;
    expectedCtc: string;
    currentCtc: string;
    department: string;
  }


export type userTypes = {
  firstName: string,
  lastName: string,
  desiganation: string,
  email: string,
  address1: string,
  address2: string,
  phoneNumber: string,
  gender: string,
  zipcode: string,
  state: string,
  city: string,
  relationshipStatus: string,
  dateOfBirth: Date
}

export type eduDetailType = {
  schDetails: {
    id?:number,
    userId?:number,
    courseName: string,
    instituteName: string,
    passingYear: number,
    percentage: number,
  }[]
}

export type workexperienceType = {
  workExperiences: {
    id?:number,
    userId?:number,
    companyName: string,
    designation: string,
    from: Date,
    to: Date,
  }[]

}

export type languageType = {
  languages: {
    id?:number,
    userId?:number,
    languageName: string,
    read?: boolean ,
    write?: boolean,
    speak?: boolean
  }[] 
}

export type technologyType = {
  technologies: {
    id?:number,
    userId?:number, 
    technologyLan?: string,
    selected?:boolean,
    level?: string,
  }[]
}

export type referenceContactsType = {
  referenceContacts: {
    id?:number,
    userId?:number,
    refName: string,
    refContactNumber: string,
    refRelation: string,
  }[]

}

export type preferenceType = {
  preferences: {
    preferanceLocation: string,
    noticePeroid: string,
    expectedCtc: String,
    currentCtc: string,
    department: string,
  }[]
}

export interface basicInfo  {
  courseName:string
  id?:number
  instituteName:string
  passingYear:number
  percentage:number
  userId?:number
}

export type formDataType = userTypes | eduDetailType | workexperienceType | languageType | technologyType | preferenceType | referenceContactsType