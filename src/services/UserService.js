import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
const EMAIL_CHECKING_URL = "http://localhost:8080/api/v1/email";
const GET_OTP_URL = "http://localhost:8080/api/v1/otp";

class UserService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    checkEmailAndSendOTP(email){
        axios.post(`http://localhost:8080/api/v1/email`, {email: email});
        console.log(email);
    }

    getOTP(email){
        return axios.get(GET_OTP_URL + "?email=" + email);
    }
    
    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + "/" + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + "/" + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + "/" + userId);
    }

}

export default new UserService()