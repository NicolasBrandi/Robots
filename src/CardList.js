import React from "react";
import Card from "./Card"

// CardList -- creates a list of cards
// argument robots needs to have same name as property on ./index.js for CardLists
const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return  (
                        <Card 
                            key={i}
                            id={user.id} 
                            name={user.name} 
                            email={user.email} 
                        /> 
                    )
                })
            }
        </div>
        
    );
}

export default CardList;


