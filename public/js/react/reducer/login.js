const initState = {
    profile: {
        email: '',
        password: '',
        name: '',
        isOk: false,
    }
};
export default function loginApp(state = initState, action) {
    switch (action.type) {
        case 'doLogin':
            return { ...state.profile, ...action.payload };
        case 'login': return { profile: { ...action.payload }};
        default:
            return state
    }
}