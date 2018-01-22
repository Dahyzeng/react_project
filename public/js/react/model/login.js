const initState = {
    profile: {
        email: '',
        password: '',
        isOk: false,
    }
};
export default function loginApp(state = initState, action) {
    switch (action.type) {
        case 'doLogin':
            return { ...state.profile, ...action.payload };
        case 'loadding': return state;
        default:
            return state
    }
}