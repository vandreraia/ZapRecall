export default function Questao({setCard, question}) {
    return (
        
        <div className="carta questao" onClick={() => setCard("resposta")}>
        {question}
        <img src="./images/setinha.png" alt="virar" />
    </div>
    )
}