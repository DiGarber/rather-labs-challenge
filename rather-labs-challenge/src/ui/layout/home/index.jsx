import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import mockJSON from "../../../utils/mockJSON";
//import axios from 'axios'

const Home = () => {
    const [triviaTitle, setTriviaTitle] = useState('')
    const [triviaImage, setTriviaImage] = useState('')
useEffect(() => {
    console.log('uwu')
    setTriviaTitle(mockJSON.title)
    setTriviaImage(mockJSON.image)
    //axios.get('/').then(() => {})
}, [])


return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
    <h2>{triviaTitle}</h2>
    <img alt='trivia thumbnail' src={triviaImage} style={{alignSelf: 'center', width: '10vw'}}></img>
    <button title="Comenzar" style={{width: '10vw', height: '30px', alignSelf: "center"}} onClick={() => {console.log('owo')}}> 
        Comenzar
    </button>
    <Link to={'/trivia'}>Comenzar</Link>
    </div>
)
}
export default Home