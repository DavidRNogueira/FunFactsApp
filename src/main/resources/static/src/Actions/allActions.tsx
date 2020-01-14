export const setUserInfo = (user:String) => {
    return {
        type: 'SET_USER_INFO',
        payload: user
    }
}