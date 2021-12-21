import Storage from "./storage"

function authHeader() {
    const user = Storage.GetItem('user')
    if(user && user.access_token){
        return {
            Authorization: 'Bearer ' + user.access_token
        }
    }else{
        return {}
    }
}

export default authHeader
