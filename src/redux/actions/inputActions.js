import { BUTTON_CLICKED, CLEAR, RESULT } from "../reducers/inputReducer";

export const buttonClicked = value => ({
    type: BUTTON_CLICKED,
    payload: value
})

export const clear = () => ({
    type: CLEAR,
    payload: null
})

export const result = result => ({
    type: RESULT,
    payload: null
})