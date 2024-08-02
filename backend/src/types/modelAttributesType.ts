

export interface userAttributes {
  id?: number,
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



export interface schDetailTypes {
  id?: number,
  courseName: string,
  instituteName: string,
  passingYear: number,
  percentage: number,
  userId?: number
}

export interface workExperienceType {
  id?: number,
  companyName: string,
  designation: string,
  from: Date,
  to: Date,
  userId?: number

}

export interface languageAttributesType {
  id?: number,
  languageName: string,
  read: boolean,
  write: boolean,
  speak: boolean,
  userId?: number
}

export interface technologyAttributesType {
  id?: number,
  technologyLan: string,
  level: string,
  userId?: number
}

export interface referenceContactTypes {
  id?: number,
  refName: string,
  refContactNumber: string,
  refRelation: string,
  userId?: number
}

export interface preferenceTypes {
  id?: number,
  preferanceLocation: string,
  noticePeroid: string,
  expectedCtc: String,
  currentCtc: string,
  department: string,
  userId?: number
}

