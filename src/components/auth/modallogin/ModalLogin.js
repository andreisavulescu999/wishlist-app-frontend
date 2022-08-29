import './ModalLogin.css';
import { AiOutlineUser,AiOutlineGoogle,AiOutlineFacebook } from 'react-icons/ai';

function ModalLogin(){
    return(
<div class="container">
	<div class="row d-flex justify-content-center mt-5">
		<div class="col-12 col-md-8 col-lg-6 col-xl-5">
			<div class="card py-3 px-2">
				<p class="text-center mb-3 mt-2">CONNECT WITH</p>
				<div class="row mx-auto">
					<div class="col-md-4  text-white rounded">
                        <AiOutlineFacebook/>
					</div>
					<div class="col-md-4  text-white rounded">
						<AiOutlineFacebook/>
					</div>
					<div class="col-md-4  text-white rounded">
						<AiOutlineGoogle/>
					</div>
				</div>
				<div class="division">
					<div class="row">
						<div class="col-3"><div class="line l"></div></div>
						<div class="col-6"><span>Email</span></div>
						<div class="col-3"><div class="line r"></div></div>
					</div>
				</div>
				<form class="myform">
					<div class="form-group">
    					<input type="email" class="form-control" placeholder="Email"></input>
  					</div>
 					<div class="form-group">
    					<input type="password" class="form-control" placeholder="Password"></input>
  					</div>
  					<div class="form-group mt-3">
  						<button type="button" class="btn btn-block btn-primary btn-lg"><small><AiOutlineUser/> Submit</small></button>
  					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    );
}

export default ModalLogin;