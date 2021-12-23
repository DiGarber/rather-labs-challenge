import React, {useState, useEffect} from "react";
import mockJSON from "../../../utils/mockJSON";
//import axios from 'axios'

const Home = () => {
    const [triviaTitle, setTriviaTitle] = useState('')
    const [triviaImage, setTriviaImage] = useState('')
useEffect(() => {
    setTriviaTitle(mockJSON.questions[1].text)
    setTriviaImage(mockJSON.image)
    //axios.get('/').then(() => {})
}, [])


return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
    <h2>{triviaTitle}</h2>
    <img alt='trivia thumbnail' src={triviaImage} style={{alignSelf: 'center', width: '10vw'}}></img>
    </div>
)
}
export default Home