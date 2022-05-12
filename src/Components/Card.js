export default function Card({setCard, index}) {
    index++;
    return (
        <div onClick={() => setCard("questao")} className="carta pergunta flex-center">
            Pergunta {index}
            <ion-icon size="large" name="play-outline"></ion-icon>
        </div>
    )
}