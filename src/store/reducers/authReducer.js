const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login_error')
            return ({
                ...state,
                authError: 'Login failed'
            })
        case 'LOGIN_SUCCESS':
            console.log('login_success')
            return({
                ...state,
                authError: null
            })
        default: 
            return state
    }
}

export default authReducer