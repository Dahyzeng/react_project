const initState = {
    profile: {
        email: '',
        password: '',
        name: '',
        isOk: false,
    }
};
export default function registerApp(state = initState, action) {
    switch (action.type) {
        case 'view': return { profile: { ...action.payload }};
        default:
            return state
    }
}