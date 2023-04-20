import { Request, Response, Router } from "express";
import { getActs, postAct, updateAct, deleteAct, getTheAct } from "../controllers/acts";
import { deleteState, getAnState, getTheStates, postState, updateState } from "../controllers/states";


const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:4002/states [GET]
 */
router.get("/all", getTheStates);
router.get("/:idState", getAnState);
/**
 * http://localhost:4002/states/ [POST]
 */
router.post("/",postState);
router.delete("/:idState",deleteState);
router.put("/:idState", updateState);

export {router};