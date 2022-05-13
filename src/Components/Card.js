export default function Card({ setCard, index, type }) {
    const clas = "carta pergunta flex-center " + type;
    index++;
    
    return (
        <div onClick={!type ? () => setCard("questao") : null} className={clas}>
            Pergunta {index}
            {
                type === "success" ? <ion-icon size="large" name="checkmark-circle"></ion-icon> :
                type === "almost" ? <ion-icon size="large" name="help-circle"></ion-icon> :
                type === "fail" ? <ion-icon size="large" name="close-circle"></ion-icon> :
                <ion-icon size="large" name="play-outline"></ion-icon>
            }
        </div>
    )
}