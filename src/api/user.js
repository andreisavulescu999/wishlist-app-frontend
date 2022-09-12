import axios from '../axios/newaxios';

export const LoginUser = async(data) => {
    const user = await axios.post(`/user/login`,data)
    return user;
};

export const RegisterUser = async (data) => {
    const user = await axios.post(`/user/create`, data);
    return user;
}

export const EditUser = async (id,data) => {
  const user = await axios.post(`/user/${id}/update`,data); 
  return user; 
} 

export const FindUser = async (id) => {
  const user = await axios.get(`/user/${id}`);
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