import axios from "axios";


export const LoginUser = async(email,password) => {
    const user =  axios.post(`/user/login`,{email,password})
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    return user;
}

export const RegisterUser = (data) => {
    data = JSON.stringify(data);
    const user = axios.post(`/user/create`, data)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    return user;
}
