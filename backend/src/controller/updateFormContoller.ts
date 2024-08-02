import { Request, Response } from "express";
import generalResponse from "../helper/generateResponse.helper";
import { getUserFormData, updateFormData } from "../repository/updateFormRepo";
import { formDataAttributesType, updateFormDataAttributesType } from "../types/formDataTypes";

export const fetchUserById = async (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    const getUserData = await getUserFormData(id);

    generalResponse(res, getUserData, 'Get User Id', 'success', true, 200);

  } catch (error) {
    generalResponse(res, error, 'error', 'false', false, 500);
  }
}

export const updateFormController = async (req: Request, res: Response) => {
  try {
    const {id}:{id:number} = req.body;
    const { data }: updateFormDataAttributesType = req.body;
    const {referenceDetails,languagesDetail,workExdetails,eduDetails,technologiesDetails} = req.body;
    
    const formData:formDataAttributesType = {
      firstName: data.firstName,
      lastName: data.lastName,
      desiganation: data.desiganation,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      email: data.email,
      address1: data.address1,
      address2: data.address2,
      state: data.state,
      city: data.city,
      zipcode: data.zipcode,
      dateOfBirth: data.dateOfBirth,
      relationshipStatus: data.relationshipStatus,

      schDetails: data.schDetails,
      workExperiences: data.workExperiences,
      languages: data.languages,
      technologies: data.technologies,
      referenceContacts: data.referenceContacts,
      preferences: data.preferences,

      eduDetails:eduDetails,
      referenceDetails:referenceDetails,
      workExdetails:workExdetails,
      languagesDetail:languagesDetail,
      technologiesDetails:technologiesDetails
    }
    const result = await updateFormData(id,formData);
    generalResponse(res, [], 'user Data', 'success', true, 200);

  } catch (error) {
    console.log(error);
    
    generalResponse(res, error, 'error', 'false', false, 500);
  }
}