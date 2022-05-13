import React from "react"
import Card from "./Card"
import Questao from "./Questao";
import Resposta from "./Resposta";

export default function Cards({index, question, answer, setComplete, complete, setIcon, icon}) {
    const [card, setCard] = React.useState("card")
    const [type, setType] = React.useState("")
    return (
        <>
            {
                card === "card" ? <Card setCard={setCard} index={index} type={type}/> :
                card === "questao" ? <Questao setCard={setCard} question={question}/> :
                <Resposta setCard={setCard} setType={setType} answer={answer} setComplete={setComplete} complete={complete} setIcon={setIcon} icon={icon}/>
            }
        </>
    )
}