
import React from "react";
import ReactDOM from "react-dom/client"

/**
 * header
 * -logo/ nav items: search, offers, help, signin cart
 * body
 * -search
 * -restaurantContainer=> restaurantCard
 * 
 * footer
 * -copyright
 * -links
 * -address
 * -contact
 * 
 */

const Header=()=>{
    return (
        <div className="header">               
            <div className="logo-container">
                <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg" alt="food logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>               
         </div>


    );

};

const resList=  [
    {
      "type": "restaurant",
      "data": {
        "type": "Fast Food",
        "id": "res001",
        "name": "KFC",
        "cuisines": ["Fried Chicken", "American", "Fast Food"],
        "image": "https://media.istockphoto.com/id/458531057/photo/bucket-of-kentucky-fried-chicken.jpg?s=1024x1024&w=is&k=20&c=u8O50AyaK6CKIiq32qTgZ5Ga7Tnd_Y0Ihj98XHhWAbs=",
        "evaluation": 4.2,
        "price": 12.99
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Korean BBQ",
        "id": "res002",
        "name": "Bulgogi Brothers",
        "cuisines": ["Korean", "Barbecue", "Grill"],
        "image": "https://media.istockphoto.com/id/503205965/photo/korean-bbq.jpg?s=1024x1024&w=is&k=20&c=mxr09IHMNoxy22lOUbEoaUTjQNSGIW_R_u-2gSpSRAY=",
        "evaluation": 4.5,
        "price": 29.50
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Pizza Chain",
        "id": "res003",
        "name": "Domino's Pizza",
        "cuisines": ["Pizza", "Italian", "Fast Food"],
        "image": "https://i.ebayimg.com/images/g/A64AAOSwEg1lY-Ci/s-l1600.webp",
        "evaluation": 4.0,
        "price": 15.75
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Cafe",
        "id": "res004",
        "name": "Starbucks",
        "cuisines": ["Coffee", "Bakery", "Beverages"],
        "image": "https://media.gettyimages.com/id/458726871/photo/grande-starbucks-to-go-cup-on-table.jpg?s=2048x2048&w=gi&k=20&c=yomBA8xL8pkGTxyGrz4IErjOQW1Qu7rPdqnDE-VSv1A=",
        "evaluation": 4.3,
        "price": 9.50
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Fast Casual",
        "id": "res005",
        "name": "Chipotle",
        "cuisines": ["Mexican", "Burritos", "Bowls"],
        "image": "https://as2.ftcdn.net/v2/jpg/02/57/47/71/1000_F_257477148_kqlxBSBlGSd4JsSE4bt0Icq2aZAwfPRF.jpg",
        "evaluation": 4.1,
        "price": 13.00
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Fine Dining",
        "id": "res006",
        "name": "Nobu",
        "cuisines": ["Japanese", "Sushi", "Seafood"],
        "image": "https://www.yummymummykitchen.com/wp-content/uploads/2021/10/nigiri-sashimi-sushi.jpg",
        "evaluation": 4.8,
        "price": 68.00
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Diner",
        "id": "res007",
        "name": "IHOP",
        "cuisines": ["Breakfast", "American", "Pancakes"],
        "image": "https://hips.hearstapps.com/hmg-prod/images/pancakes-lead-64c95a0412264.jpg?crop=1xw:1xh;center,top&resize=1200:*",
        "evaluation": 4.0,
        "price": 11.25
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Italian Restaurant",
        "id": "res008",
        "name": "Olive Garden",
        "cuisines": ["Italian", "Pasta", "Salads"],
        "image": "https://images.themodernproper.com/production/posts/PastaPrimavera_10.jpg?w=600&q=82&auto=format&fit=crop&dm=1719193287&s=1738462edeb0c04366d24491d017cfe1",
        "evaluation": 4.2,
        "price": 22.80
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Burger Chain",
        "id": "res009",
        "name": "Five Guys",
        "cuisines": ["Burgers", "Fries", "Milkshakes"],
        "image": "https://www.howtocookthat.net/public_html/wp-content/uploads/2016/06/freakshakes-2-550x309.jpg",
        "evaluation": 4.4,
        "price": 14.60
      }
    },
    {
      "type": "restaurant",
      "data": {
        "type": "Middle Eastern",
        "id": "res010",
        "name": "Shawarma House",
        "cuisines": ["Lebanese", "Mediterranean", "Grill"],
        "image": "https://www.kikkoman.eu/fileadmin/_processed_/a/2/csm_Blog_onFIre-BBQ_Header_Desktop_cda5dab67d.webp",
        "evaluation": 4.1,
        "price": 17.40
      }
    }
  ]
  

                    // props are an object that hold all properties.// can destructure obj on the fly.
                    // props  , or  {resName, cuisine}=props or  {resName, cuisine}
const RestaurantCard=(props)=>{
   const {resData}=props;  
   const{type, name, cuisines,evaluation,price} =resData?.data;
    return(
        <div className="res-card" //style={{backgroundColor:"skyblue"}}
        >
            <img className="food-image" src={resData.data.image} alt=""/>
            <h1>Type : {type}</h1>
            <h1>Restaurant: {name}</h1>
            <h1>Cuisins: {cuisines.join(",")}</h1>
            <h1>Evaluation: {evaluation}</h1>
            <h1>Price: {price}</h1>           
        </div>
    )

}
const Body=()=>{
    return(
    <div className="body">
        <div className="Search">Search</div>
        <div className="restaurant-container">   
            {
                resList.map(restaurant=>(<RestaurantCard key={restaurant.data.id} resData={restaurant} />))
            }

          
           
            
        </div>
    </div>
    )
}
const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
