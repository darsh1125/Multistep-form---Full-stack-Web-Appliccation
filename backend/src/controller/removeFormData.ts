import { Request, Response } from "express";
import db from "../models";
import generalResponse from "../helper/generateResponse.helper";
import { removeData } from "../repository/removeFormData";

export const removeFormData = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    // remove Basic Details 
    const removeFormInfo = removeData(id);
    
    generalResponse(res, [], "", "Successfully destroy data !!!", true, 200);

  } catch (error) {
    generalResponse(res, error, '', 'error', false, 500);
  }

} 