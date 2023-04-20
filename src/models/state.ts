import { State } from "../interfaces/state.interface";
import {  Schema, model } from "mongoose";

const StateSchema = new Schema<State>({
    indicator: {
      type: String,
      enum: ["offline","online"],
      required: true
    },
    available:{
      type: Number,
      required: true
    },
    last_updated:{
      type: Date,
      required: true
    }},
    {
        timestamps: true,
        versionKey: false,
    }
  );
  const StateModel = model('states', StateSchema);
  export default StateModel;