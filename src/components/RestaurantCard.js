import { IMG_CDN_URL} from "../utils/constants.js"

const RestaurantCard = (props) =>{

    const { restaurantData } = props;
    console.log("restaurantData = ",JSON.stringify(restaurantData));
    const {name , cuisines , avgRating , sla , costForTwo , cloudinaryImageId } = restaurantData
    return (
        <div className="restaurant-card" style={{"backgroundColor": "#ac94c4"}}>
            <img className="restaurant-image" src={IMG_CDN_URL+cloudinaryImageId}
                 alt="Pizza Hut" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} *</h4>
            <h4>{sla.deliveryTime} Mins</h4>    
        </div>
    );
}

export default RestaurantCard;