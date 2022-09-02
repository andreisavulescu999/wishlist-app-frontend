import axios from "axios";

export const LoginUser = async(email,password) => {
    const data = JSON.stringify(email,password);
    console.log(data);
    const user = await axios.post(`/user/login`,data)
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
    return user;
};

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
  const user = await axios.get(`/user/${id}`)
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return user;
} 

export const DeleteUser = async (id) => {
  const user = await axios.get(`/user/${id}/delete`,{})
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
  return 'User deleted';
} 