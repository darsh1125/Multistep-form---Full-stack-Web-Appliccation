
export interface insertFormDataAttributes {


  firstName: string,
  lastName: string,
  desiganation: string,
  phoneNumber: string,
  gender: string,
  email: string,
  address1: string,
  address2: string,
  state: string,
  city: string,
  zipcode: string,
  dateOfBirth: Date,
  relationshipStatus: string,

  schDetails: {
    id?: number,
    userId?: number,
    courseName: string,
    instituteName: string,
    passingYear: number,
    percentage: number
  }[]

  workExperiences: {
    id?: number,
    userId?: number,
    companyName: string,
    designation: string,
    from: Date,
    to: Date
  }[]

  languages: {
    id?: number,
    userId?: number,
    languageName: string,
    read: boolean,
    write: boolean,
    speak: boolean

  }[]

  technologies: {
    id?: number,
    userId?: number,
    technologyLan: string,
    level: string
  }[]

  referenceContacts: {
    id?: number,
    userId?: number,
    refName: string,
    refContactNumber: string,
    refRelation: string
  }[]

  preferences: {
    preferanceLocation: string,
    noticePeroid: string,
    expectedCtc: string,
    currentCtc: string,
    department: string
  }[]

}
export interface formDataAttributesType {

  firstName: string,
  lastName: string,
  desiganation: string,
  phoneNumber: string,
  gender: string,
  email: string,
  address1: string,
  address2: string,
  state: string,
  city: string,
  zipcode: string,
  dateOfBirth: Date,
  relationshipStatus: string,

  schDetails: {
    id?: number,
    userId?: number,
    courseName: string,
    instituteName: string,
    passingYear: number,
    percentage: number
  }[]

  workExperiences: {
    id?: number,
    userId?: number,
    companyName: string,
    designation: string,
    from: Date,
    to: Date
  }[]

  languages: {
    id?: number,
    userId?: number,
    languageName: string,
    read: boolean,
    write: boolean,
    speak: boolean

  }[]

  technologies: {
    id?: number,
    userId?: number,
    technologyLan: string,
    level: string
  }[]

  referenceContacts: {
    id?: number,
    userId?: number,
    refName: string,
    refContactNumber: string,
    refRelation: string
  }[]

  preferences: {
    preferanceLocation: string,
    noticePeroid: string,
    expectedCtc: string,
    currentCtc: string,
    department: string
  }[]

  eduDetails: number[]
  workExdetails: number[]
  referenceDetails: number[]
  languagesDetail: number[]
  technologiesDetails: number[]

}

export interface updateFormDataAttributesType {

  data: {
    firstName: string,
    lastName: string,
    desiganation: string,
    phoneNumber: string,
    gender: string,
    email: string,
    address1: string,
    address2: string,
    state: string,
    city: string,
    zipcode: string,
    dateOfBirth: Date,
    relationshipStatus: string,

    schDetails: {
      courseName: string,
      instituteName: string,
      passingYear: number,
      percentage: number
    }[]

    workExperiences: {
      companyName: string,
      designation: string,
      from: Date,
      to: Date
    }[]

    languages: {
      languageName: string,
      read: boolean,
      write: boolean,
      speak: boolean

    }[]

    technologies: {
      technologyLan: string,
      level: string
    }[]

    referenceContacts: {
      refName: string,
      refContactNumber: string,
      refRelation: string
    }[]

    preferences: {
      preferanceLocation: string,
      noticePeroid: string,
      expectedCtc: string,
      currentCtc: string,
      department: string
    }[]

  }

}


export interface BasicDetailsData {
  firstName: string,
  lastName: string,
  desiganation: string,
  phoneNumber: string,
  gender: string,
  email: string,
  address1: string,
  address2: string,
  state: string,
  city: string,
  zipcode: string,
  dateOfBirth: Date,
  relationshipStatus: string,
}