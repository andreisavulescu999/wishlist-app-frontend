import gifts from '../assets/images/home-white-gifts.jpg';
import NewCard from '../components/card/NewCard';
import confetti from '../assets/images/home-confetti.jpg';
import wishlist from '../assets/images/home-wishlist.jpg';
import envelope from '../assets/images/home-envelope.jpg';

export const Home = () => {
    return(
        <>
        <div class="row text-white text-center">
            <div class="col-md-12">
                    <h2>Welcome to our wishlist app</h2>
                    <p>You can buy presents for the people you love</p>
            </div> 
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                    <img width='720' class="img-fluid rounded shadow-lg" src={gifts}></img>
            </div>
        </div>
        <div class="division text-white">
					<div class="row">
						<div class="col-4"><div class="line l"></div></div>
						<div class="col-4"><h2>How it works</h2></div>
						<div class="col-4"><div class="line r"></div></div>
					</div>
		</div>
        <div class="row">
            <div class="col-md-4 text-center">
                <NewCard title='Create an event' description='birthday, weeding or just to hang out' link='link' image={confetti} height={300}/>
            </div>
            <div class="col-md-4 text-center">
                <NewCard title='Make your wishlist' description='anything you want' link='link' image={wishlist} height={300}/>
            </div>
            <div class="col-md-4 text-center">
                <NewCard title='Invite' description='your friends, your family' link='link' image={envelope} height={300}/>
            </div>
        </div>
        </>


    );
}
