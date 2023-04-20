import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertState, getAllStates, getState, changeState,eraseState } from "../services/states";

const getTheStates=async(req:Request,res:Response)=>{
    try{
        const response=await getAllStates();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GETTING_VACCINES");
    }
};
const getAnState = async({params}:Request,res:Response) => {
    try {
        const {idState} = params;
        const response = await getState(idState);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_STATE");
    }
};
const postState=async ({body}:Request,res:Response)=>{
    try{
        const response=await insertState(body);
        res.send(response);
    }catch(e){
        handleHttp(res,"ERROR_POST_STATE");
    }
};
const updateState=async ({params,body}:Request,res:Response)=>{
    try{
        const {idState}=params;
        const response=await changeState(idState,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_STATE");
    }
};
const deleteState=async ({params}:Request,res:Response)=>{
    try{
        const {idState}=params;
        const response=await eraseState(idState);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_STATE");
    }
};


export{getAnState, getTheStates, postState, updateState, deleteState};