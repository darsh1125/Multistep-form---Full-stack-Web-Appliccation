import { where } from "sequelize";
import db from "../models"
import language from "../models/language";
import preference from "../models/preference";
import referenceContact from "../models/referencecontact";
import schDetail from "../models/schdetail";
import technology from "../models/technology";
import workExperience from "../models/workexperience";
import { BasicDetailsData, formDataAttributesType, updateFormDataAttributesType } from "../types/formDataTypes";

export const getUserFormData = async (id: number) => {
  const getData = await db.User.findAll({
    where: {
      id: id
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt']
    },
    include: [
      {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt']
        },
        model: schDetail
      },
      {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt']
        },
        model: workExperience
      },
      {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt']
        },
        model: language
      },
      {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt']
        },
        model: technology
      },
      {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt']
        },
        model: referenceContact
      },
      {
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt']
        },
        model: preference
      }
    ]
  });
  return getData;
}

// update form 
export const updateFormData = async (id: number, formData: formDataAttributesType) => {

  const basicDetails: BasicDetailsData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    desiganation: formData.desiganation,
    phoneNumber: formData.phoneNumber,
    gender: formData.gender,
    email: formData.email,
    address1: formData.address1,
    address2: formData.address2,
    state: formData.state,
    city: formData.city,
    zipcode: formData.zipcode,
    dateOfBirth: formData.dateOfBirth,
    relationshipStatus: formData.relationshipStatus,
  }

  const eduDetails = formData.schDetails;
  const workExperienceDetails = formData.workExperiences;
  const languageDetails = formData.languages;
  const technologyDetails = formData.technologies;
  const referenceContactDetails = formData.referenceContacts;
  const preferenceDetails = formData.preferences;

  // Update Basic Details 
  const updateBasicDetails: number[] = await db.User.update(basicDetails, {
    where: {
      id: id
    }
  });

  // Update Education Details
  for (let ele of eduDetails) {
    if (ele.userId === undefined) {
      ele.userId = id
    }
  }

  const updateSchDetails: schDetail[] = await db.schDetail.bulkCreate(eduDetails, {
    updateOnDuplicate: ['courseName', 'instituteName', 'passingYear', 'percentage', 'id', 'userId']
  });

  // Remove data from database that dynamic remove
  if (formData.eduDetails.length !== 0) {
    formData.eduDetails.map(async (ele) => (
      await db.schDetail.destroy({
        where: {
          userId: id,
          id: ele
        }
      })
    ))
  }

  // update work Experience details
  for (let ele of workExperienceDetails) {
    if (ele.userId === undefined) {
      ele.userId = id;
    }
  }
  const updateWorkExperienceDetails: workExperience[] = await db.workExperience.bulkCreate(workExperienceDetails, {
    updateOnDuplicate: ['companyName', 'designation', 'from', 'to', 'id', 'userId']
  });
  // remove data that dynamically remove
  if (formData.workExdetails.length !== 0) {
    formData.workExdetails.map(async (ele) => (
      await db.workExperience.destroy({
        where: {
          id: ele,
          userId: id
        }
      })
    ))
  }
  // adding userID to Data
  for (let ele of languageDetails) {
    if (ele.userId === undefined) {
      ele.userId = id;
    }
  }
  const updateLanguageDetails: language[] = await db.language.bulkCreate(languageDetails, {
    updateOnDuplicate: ['languageName', 'read', 'write', 'speak', 'id', 'userId']
  });
  // remove other languages from database 

  if (formData.languagesDetail.length !== 0) {
    formData.languagesDetail.map(async (ele) => {
      await db.language.destroy({
        where: {
          id: ele,
          userId: id
        }
      })
    })
  }

  for (let ele of technologyDetails) {
    if (ele.userId === undefined) {
      ele.userId = id;
    }
  }

  const updateTechnologiesDetails: technology[] = await db.technology.bulkCreate(technologyDetails, {
    updateOnDuplicate: ['technologyLan', 'level', 'id', 'userId']
  });

  // remove technology from database
  if (formData.technologiesDetails.length !== 0) {
    formData.technologiesDetails.map(async (ele) => {
      await db.technology.destroy({
        where: {
          id: ele,
          userId: id
        }
      });
    });
  }

  for (let ele of referenceContactDetails) {
    if (ele.userId === undefined) {
      ele.userId = id;
    }
  }
  const updateReferenceDetails: referenceContact[] = await db.referenceContact.bulkCreate(referenceContactDetails, {
    updateOnDuplicate: ['refName', 'refContactNumber', 'refRelation', 'id', 'userId']
  });

  // Update references Details 
  if (formData.referenceDetails.length !== 0) {
    referenceContactDetails.map(async (ele) => (
      await db.referenceContact.destroy({
        where: {
          userId: id,
          id: ele.id
        }
      })
    ));
  }
  const updatePreferenceDetails: preference[] = await db.preference.bulkCreate(preferenceDetails, {
    updateOnDuplicate: ['preferanceLocation', 'noticePeroid', 'expectedCtc', 'currentCtc', 'department', 'id', 'userId']
  });

}
