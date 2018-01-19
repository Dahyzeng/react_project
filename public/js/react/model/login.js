const initState = {
    profile: {
        email: '',
        password: '',
        isOk: false,
    }
};
export default function loginApp(state = initState, action) {
    switch (action.type) {
        case 'doLogin': return {
            profile: {
                ...state.profile,
                isOk: true,
            },

        };
        default:
            return state
    }
}