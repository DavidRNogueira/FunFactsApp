interface IUser {
    username:string,
    password:string
}

const initState:IUser = {
    username: '',
    password: ''
}

export const user:any = (state:IUser = initState, action:any) => {

    const {type, payload} = action;

   if (type === "SET_USER_INFO"){
       return {...state, ...payload}
   }

}