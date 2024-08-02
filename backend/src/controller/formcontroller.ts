import { Request, Response } from "express";
import generalResponse from "../helper/generateResponse.helper";
import { formDataAttributesType, insertFormDataAttributes } from "../types/formDataTypes";
import { insertFormData } from "../repository/formDataRepo";

export const getFormData = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, desiganation, phoneNumber, gender, email, address1, address2,
      state, city, zipcode, dateOfBirth, relationshipStatus,
      schDetails, languages, technologies, referenceContacts, workExperiences,
      preferences }: formDataAttributesType = req.body;

    console.log("work experience details ", workExperiences);

    const formData: insertFormDataAttributes = {
      firstName: firstName,
      lastName: lastName,
      desiganation: desiganation,
      phoneNumber: phoneNumber,
      gender: gender,
      email: email,
      address1: address1,
      address2: address2,
      state: state,
      city: city,
      zipcode: zipcode,
      dateOfBirth: dateOfBirth,
      relationshipStatus: relationshipStatus,

      schDetails: schDetails,
      workExperiences: workExperiences,
      languages: languages,
      technologies: technologies,
      referenceContacts: referenceContacts,
      preferences: preferences

    }
    const result = await insertFormData(formData)

    generalResponse(res, [], 'form Data Inserted Successfully !!!', 'success', true, 200);

  } catch (error) {
    console.log(error);

    generalResponse(res, error, '', 'error', false, 500);
  }
}
