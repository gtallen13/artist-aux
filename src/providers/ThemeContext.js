import createDataContext from './createDataContext';

const themeReducer = (state, action) => {
    switch (action.type) {
        case "toggleTheme":
            return {
                ...state,
                theme: action.payload,
            }
        default:
            return state
    }
}

const toggleTheme = (dispatch)=> (theme) => {
    dispatch({type: "toggleTheme", payload:theme})
}

export const {Provider, Context} = createDataContext(
    themeReducer,
    {
        toggleTheme
    },
    {
        theme: false //Cuando esta en false el tema va a ser default y cuando es true será dark
    }
)