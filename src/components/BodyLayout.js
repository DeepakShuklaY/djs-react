import RestaurantCard  from "./RestaurantCard.js"
import { useState, useEffect } from "../../node_modules/react";
import ShimmerUI from "./ShimmerUI.js";

const BodyLayout = () => {
    
    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchInput,setsearchInput] = useState("");
    useEffect(async ()=>{
        console.log("useEffect called");
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json()
        const restaurants = json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        console.log("restaurants = ",json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    },[])

    if(!listOfRestaurants.length){
        return(
            <ShimmerUI></ShimmerUI>
        )
    }

    const searchHandler = () =>{
        console.log("searchInput = ",searchInput);
        const filteredRestaurantList = listOfRestaurants.filter((restaurant)=>
         restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()));
        console.log("filteredRestaurantList = ",filteredRestaurantList);
        setFilteredRestaurants(filteredRestaurantList);
    }

    const inputChangehandler = (e) =>{
        console.log("inputChangehandler = ",e.target.value);
        setsearchInput(e.target.value);
    }

    
    return (
    <div className="body">
        <div className="filter">
            <div className="search-box">
                <input type="text" placeholder="Input your search query." className="search-field" value={searchInput}
                    onChange={inputChangehandler}
                />

                <button className="btn-search" onClick={searchHandler}>Search</button>

                <button className="filter-btn" onClick={()=>{
                        console.log("filter top res triggerd");
                        const topRatedRestaurants = listOfRestaurants.filter((restaurant)=>restaurant.info.avgRating >=4);
                        console.log("topRatedRestaurants = ",topRatedRestaurants);
                        setFilteredRestaurants(topRatedRestaurants);
                    }} >Top Rated Restaurants
                </button>
            </div>
            
        </div>
        <div className="restaurant-container">
            {
                filteredRestaurants.map((restaurant) => 
                (<RestaurantCard key={restaurant.info.id} restaurantData = {restaurant.info}/>))
            }
        </div>
    </div>
)
}

export default BodyLayout;