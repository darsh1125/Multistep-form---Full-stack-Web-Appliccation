import db from "../models"
import language from "../models/language";
import preference from "../models/preference";
import referenceContact from "../models/referencecontact";
import schDetail from "../models/schdetail";
import technology from "../models/technology";
import User from "../models/user";
import workExperience from "../models/workexperience";
import { formDataAttributesType, insertFormDataAttributes } from "../types/formDataTypes";

export const insertFormData = async (data: insertFormDataAttributes) => {
  const result = await db.User.create(data,
    {
      include: [schDetail, workExperience, language, technology,
        referenceContact, preference]
    });
}