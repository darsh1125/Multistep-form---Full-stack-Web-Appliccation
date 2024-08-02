import { Request, Response } from "express";
import generalResponse from "../helper/generateResponse.helper";
import db from "../models";

export const fetchState = async (req: Request, res: Response) => {
  try {
    const data = await db.state.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });

    generalResponse(res, data, 'Get All State Data ', 'success', true, 200);
  } catch (error) {
    generalResponse(res, error, '', 'error', false, 500);
  }
}

export const fetchCity = async (req: Request, res: Response) => {
  try {
    const {state}:{state:number} = req.body;
    const fetchCityData = await db.city.findAll({
      where:{
        stateId:state
      },
      attributes:{
        exclude:['createdAt', 'updatedAt','stateId']
      }
    });
    generalResponse(res,fetchCityData, 'Get All City Data ', 'success', true, 200);
    
  } catch (error) {
    generalResponse(res, error, '', 'error', false, 500);
  }
}

export const getStateId = async (req:Request,res:Response) => {
  try {
    const {state}:{state:string} = req.body;
  
    const fetchstateId = await db.state.findOne({
      where:{
        state:state
      },
      attributes:['id']
    });
    
    generalResponse(res, fetchstateId?.id, 'Get State Id ', 'success', true, 200);


  } catch (error) {
    generalResponse(res, error, '', 'error', false, 500);
  }
}