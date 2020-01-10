const initialState = {
    Email : {},
    Password: {}
}

export default function(state= initialState, action){
    switch(action.type){
        case 'LOGIN_ACTION':
            return {
                ...state,
             result: action.payload
            }
           default:
            return state
          }
    }
