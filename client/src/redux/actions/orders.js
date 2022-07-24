import { GET_ORDER } from "../actionTypes";
import * as api from "../../api/index";

export const getOrder = (formData,history) =>async (dispatch)=> {
    try {
        //log in the user and navigate to the homepage
        const { data } = await api.getOrder(formData);
        dispatch({ type: GET_ORDER, payload: data });

        // history.push(HOMEPAGE)
    } catch (error) {
        console.log(error)
    }
}