import { Request, Response } from "express";
import generalResponse from "../helper/generateResponse.helper";
import db from "../models";
import { Op } from "sequelize";

export const getAllUsers = async (req:Request,res:Response) => {
   try {
    const data = await db.User.findAll({
      attributes:['id','firstName','lastName','desiganation','email','gender','address1','state','city']
    });
    generalResponse(res,data,'Get All User Info ','success',true,200);
    
   } catch (error) {
     generalResponse(res,error,'','error',false,500);
   }
}

export const searchUserByName = async(req:Request,res:Response) => {
  try {
    const {search} = req.body;
    const data = await db.User.findAll({
       where:{
         firstName:{
           [Op.like]:`%${search}%`
         }
       } 
    });
    
    generalResponse(res,data,'search user ','success',true,200);
    
  } catch (error) {
    generalResponse(res,error,'','error',false,500);
  }
}