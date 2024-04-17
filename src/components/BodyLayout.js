import RestaurantCard  from "./RestaurantCard.js"
import { restaurantList } from "../utils/constants.js"
import { useState } from "../../node_modules/react";

const BodyLayout = () => {
    console.log(useState(
        [
            {
                data: {
                  id: "73011",
                  name: "KFC",
                  cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                  cuisines: ["American", "Snacks", "Biryani"],
                  costForTwo: 30000,
                  deliveryTime: 31,
                  avgRating: "3.8",
                }
            },
            {
                data: {
                  id: "73012",
                  name: "Dominos",
                  cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                  cuisines: ["American", "Snacks", "Biryani"],
                  costForTwo: 30000,
                  deliveryTime: 31,
                  avgRating: "4.5",
                }
            },
            {
                data: {
                  id: "73013",
                  name: "MCD",
                  cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                  cuisines: ["American", "Snacks", "Biryani"],
                  costForTwo: 30000,
                  deliveryTime: 31,
                  avgRating: "4",
                }
            }
        ]
    ))
    const [listOfRestaurants,setListOfRestaurants] = useState(restaurantList)
    console.log("setListOfRestaurants = ",setListOfRestaurants);
    
    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                console.log("filter top res triggerd");
                const topRatedRestaurants = listOfRestaurants.filter((restaurant)=>restaurant.data.avgRating >=4);
                console.log("topRatedRestaurants = ",topRatedRestaurants);
                setListOfRestaurants(topRatedRestaurants);
            }} >Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
            {
                listOfRestaurants.map((restaurant) => 
                (<RestaurantCard key={restaurant.data.id} restaurantData = {restaurant}/>))
            }
        </div>
    </div>
)
}

export default BodyLayout;