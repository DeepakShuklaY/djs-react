import { IMG_CDN_URL} from "../utils/constants.js"

const RestaurantCard = (props) =>{
    const { restaurantData } = props;
    const {name , cuisines , avgRating , deliveryTime , costForTwo , cloudinaryImageId } = restaurantData?.data
    return (
        <div className="restaurant-card" style={{"backgroundColor": "#ac94c4"}}>
            <img className="restaurant-image" src={IMG_CDN_URL+cloudinaryImageId}
                 alt="Pizza Hut" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{avgRating} *</h4>
            <h4>{deliveryTime} Mins</h4>    
        </div>
    );
}

export default RestaurantCard;