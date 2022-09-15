import './Profile.css';
import { AiOutlineUser,AiOutlineGoogle,AiOutlineFacebook } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import React, { useState,useContext } from "react";
import {LoginUser} from '../../../api/user';
import { GeneralContext } from "../../../context/GeneralContext";


function Profile(){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const { setToken } = useContext(GeneralContext);

  const Login = () => {		
      const user = LoginUser(email,password);
      if (user.token) {
        // setToken(user.token);
        navigate('/products');
    }
  };

    return(
<div class="container">
	<div class="row d-flex justify-content-center mt-5">
		<div class="col-12 col-md-8 col-lg-6 col-xl-5">
			<div class="card py-3 px-2">
				<p class="text-center mb-3 mt-2">Login</p>
				{/* <p class="text-center mb-3 mt-2">CONNECT WITH</p>
				<div class="row mx-auto">
					<div class="col-md-4 d-inline  text-white rounded">
                        <AiOutlineFacebook/>
					</div>
					<div class="col-md-4  d-inline text-white rounded">
						<AiOutlineFacebook/>
					</div>
					<div class="col-md-4 d-inline  text-white rounded">
						<AiOutlineGoogle/>
					</div>
				</div> */}
				<div class="division">
					<div class="row">
						<div class="col-3"><div class="line l"></div></div>
						<div class="col-6"><span>Email</span></div>
						<div class="col-3"><div class="line r"></div></div>
					</div>
				</div>
				<form class="myform">
					<div class="form-group">
    					<input type="email" value={email} placeholder="Enter email" onChange={(email) => setEmail(email.target.value)} class="form-control"></input>
  					</div>
 					<div class="form-group">
    					<input type="password" value={password} onChange={(password) => setPassword(password.target.value)} class="form-control" placeholder="Password"></input>
  					</div>
  					<div class="form-group mt-3">
  						<button onClick={Login}  type="button" class="btn btn-block btn-primary btn-lg"><small><AiOutlineUser/> Login</small></button>
  					</div>
				</form>
				<a className='text-white' href='/register'>You are not registered?</a>
			</div>
		</div>
	</div>
</div>
    );
}

export default Profile;