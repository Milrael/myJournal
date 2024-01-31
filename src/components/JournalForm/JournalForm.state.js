export const INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        date: true
    },
    values: {
        post: '',
        title: '',
        date: '',
        tag: ''
    },
    isFormReady: false
};

export function formReducer(state, action) {
    switch(action.type) {
        case 'RESET_VALID':
           return {...state, isValid: INITIAL_STATE.isValid} 
        case 'SUBMIT': {
            const isTitleValid = action.payload.title?.trim().length;
            const isPostValid = action.payload.post?.trim().length;
            const isDateValid = action.payload.date;
        
            return {
                values: action.payload,
                isValid : {
                    post: isPostValid,
                    title: isTitleValid,
                    date: isDateValid
                },
                isFormReady: isTitleValid && isPostValid && isDateValid
            }
        }
    }



}