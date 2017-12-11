import axios from 'axios';

// regObj = {
//     username,
//     password
// }
export async function registrationApi(regObj) {
    let result = await axios.post("/api/user/registration", regObj);
    return result;
}

export async function loginApi(username, password) {
    let result = await axios.post("/api/user/login", {
        username,
        password
    });
    return result;
}

