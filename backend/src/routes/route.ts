import express from 'express'
import { fetchCity, fetchState, getStateId } from '../controller/stateController';
import { getFormData } from '../controller/formcontroller';
import { getAllUsers, searchUserByName } from '../controller/AllUsers';
import { fetchUserById, updateFormController } from '../controller/updateFormContoller';
import { removeFormData } from '../controller/removeFormData';

const router = express.Router();

router.get("/getState",fetchState);
router.post("/getcities",fetchCity);
router.post("/getStateId",getStateId);
router.post("/formData",getFormData);

router.get("/users",getAllUsers);

// update form
router.get("/getUserData/:id",fetchUserById);
router.post("/updateUser",updateFormController);

// remove user Data from Form
router.post('/removeUser',removeFormData);
router.post('/search',searchUserByName);

export default router;