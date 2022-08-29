import axios from "axios";

export const LoginUser = async(email,password) => {
    const user = await axios.post(`/user/login`,{email,password})
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    return user;
}

export const RegisterUser = async (data) => {
    data = JSON.stringify(data);
    const user = await axios.post(`/user/create`, data)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    return user;
}

export const EditUser = async (id,data) => {
  data = JSON.stringify(data);
  const user = await axios.post(`/user/${id}/edit`,{data})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return user;
} 

export const FindUser = async (id) => {
  const user = await axios.get(`/user/${id}`,{})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return user;
} 