import AllProducts from "../components/product/AllProducts";


export const Products = () => {
    return(
        <>
        <div class="division text-white">
					<div class="row">
                        <div class="col-4"><div class="line l"></div></div>
                        <div class="col-4"><h3>Add your first product to add to your wishlist</h3></div>
                        <div class="col-4"><div class="line r"></div></div>
					</div>
		</div>
        <div class="row">
                <AllProducts/>
        </div>

        </>


    );
}
