import AllWishlists from "../components/wishlist/AllWishlists";


export const Wishlists = () => {
    return(
        <>  
        <div class="division text-white">
					<div class="row">
                        <div class="col-4"><div class="line l"></div></div>
                        <div class="col-4"><h3>Create your first <b>WISHLIST</b></h3></div>
                        <div class="col-4"><div class="line r"></div></div>
					</div>
		</div>
        <div class="row">
            <div class="col-md-12">
                <button class="btn btn-primary btn-lg"><a class="text-white" href="/wishlist/create">Create</a></button>
            </div> 
        </div>
        <div class="division text-white">
					<div class="row">
                        <div class="col-4"><div class="line l"></div></div>
                        <div class="col-4"><h3>Add your wishes</h3></div>
                        <div class="col-4"><div class="line r"></div></div>
					</div>
		</div>
        <div class="row">
            <AllWishlists></AllWishlists>  
        </div>

        </>


    );
}