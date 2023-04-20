import { State } from "../interfaces/state.interface";
import StateModel from "../models/state";

const insertState = async(item: State) => {
    const responseInsert = await StateModel.create(item);
    return responseInsert;
};

const getState = async(id: string) => {
    const responseItem = await StateModel.findOne({_id: id});
    return responseItem;
};

const getAllStates = async() => {
    const responseItem = await StateModel.find();
    return responseItem;
};
const changeState = async(id: string, data: State) => {
    const responseItem = await StateModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const eraseState = async(id: string) => {
    const responseItem = await StateModel.findOneAndRemove({_id: id});
    return responseItem;
}

export { insertState, getAllStates, changeState, eraseState, getState};
