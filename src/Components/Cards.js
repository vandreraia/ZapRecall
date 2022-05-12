import React from "react"
import Card from "./Card"
import Questao from "./Questao";
import Resposta from "./Resposta";

export default function Cards({index, question, answer}) {
    console.log(question)
    const [card, setCard] = React.useState("card")
    return (
        <>
            {
                card === "card" ? <Card setCard={setCard} index={index} /> :
                    card === "questao" ? <Questao setCard={setCard} question={question}/> :
                        <Resposta setCard={setCard} answer={answer}/>
            }
        </>
    )
}