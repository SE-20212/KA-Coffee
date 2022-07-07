import { GET_ORDER } from "../actionTypes";
import * as api from "../../api/index";

export const signin = (formData,history) =>async (dispatch)=> {
    try {
        //log in the user and navigate to the homepage
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH,data });

        history.push(HOMEPAGE)
    } catch (error) {
        console.log(error)
    }
}