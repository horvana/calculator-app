export const BUTTON_CLICKED = 'BUTTON_CLICKED'
export const CLEAR = 'CLEAR'
export const RESULT = 'RESULT'

const initialState = {
    clickedButtonValue: [],
    inputValue: '',
    result: 0
}

const getResult = (values) => {
    const expression = values.join('')
    try {
        if (expression.length < 0) {
            return 0
        }
        const result = eval(expression)
        return result;
    } catch (error) {
        console.error('Error during evaluation: ', error)
        return 'Error'
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_CLICKED:
            return {
                ...state, 
                clickedButtonValue: [
                    ...state.clickedButtonValue, 
                    action.payload],
                inputValue: action.payload,
                result: [...state.clickedButtonValue, 
                action.payload]
            }

        case CLEAR:
            return {
                ...state, 
                clickedButtonValue: [],
                inputValue: '',
                result: 0
            }

        case RESULT:
            return {
                ...state,
                clickedButtonValue: [],
                inputValue: '',
                result: getResult(state.clickedButtonValue)
            }
        default: 
            return state;
    }
}

export default rootReducer