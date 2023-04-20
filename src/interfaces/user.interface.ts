import { Auth } from "./auth.interface";
import { State } from "./state.interface";

export interface User extends Auth {
    name: string;
    surname: string;
    role: "admin" | "need" | "help";
    state: State;
}