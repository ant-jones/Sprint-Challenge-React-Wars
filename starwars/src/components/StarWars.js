import React, {useState, useEffect} from "react";
import axios from "axios";
import WarCard from "./WarCard.js/index.js"


export default function theForce(props){

    const [warsChar, setwarsChar] = useState()

useEffect(() =>{
    axios
    .get("https://swapi.co/")
    .then(response => {
        const warsChar = response;
        console.log(warsChar)
        setwarsChar(warsChar)
    })
    .catch(error => {
        console.log("Error: No Data", error)
    })
},[])
return(
    <div>
        
    </div>
)
}
