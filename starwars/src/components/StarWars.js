import React, {useState, useEffect} from "react";
import axios from "axios";
import WarCard from "./WarCard.js"
import { Container, Row} from 'reactstrap';

export default function TheForce(props){

    const [warsChar, setwarsChar] = useState([])

useEffect(() =>{
    axios
    .get("https://swapi.co/api/people/")
    .then(response => {
        const warsChar = response.data.results;
        console.log(warsChar)
        setwarsChar(warsChar)
    })
    .catch(error => {
        console.log("Error: No Data", error)
    })
},[])
return(
    <Container>
        <Row>
        {warsChar.map(char => {
                       
            return(
                <WarCard
                name = {char.name}
                gender = {char.gender}
                birthday = {char.birth_year}
                eyes = {char.eye_color} />
            )
            
        })}
        </Row>
    </Container>
)
    
}

