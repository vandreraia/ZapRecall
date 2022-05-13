import React from "react"
export default function Footer({ complete, size, icon,setComplete, setIcon }) {

    function renderResults() {
        if (complete === size) {
            if (icon.find(element => element === "fail")) {
                return (
                    <>
                        <b>putz</b>
                        <span>Ainda faltam alguns...<br />Mas não desanime!</span>
                    </>
                )
            } else {
                return (
                    <>
                        <b>Parabéns!</b>
                        <span>Você não esqueceu de nenhum flashcard!</span>
                    </>
                )
            }
        }
    }

    function restart() {
        setComplete(0);
        setIcon([]);
    }
    return (
        <footer className={complete === size ? "flex-center" : "flex-center downscale"}>
            {renderResults()}
            <div>
                {complete}/{size} CONCLUÍDOS
            </div>
            <div>
                {icon.map((icon, index) => icon === "success" ? <ion-icon key={index} size="large" class="success" name="checkmark-circle"></ion-icon> :
                    icon === "almost" ? <ion-icon key={index} size="large" class="almost" name="help-circle"></ion-icon> :
                        icon === "fail" ? <ion-icon key={index} size="large" class="fail" name="close-circle"></ion-icon> :
                            <ion-icon key={index} size="large" name="play-outline"></ion-icon>)}
            </div>
            {complete === size ? <button onClick={restart}>REINICIAR RECALL</button> : ""}
        </footer>

    )
}