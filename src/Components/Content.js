import React from "react"

export default function Content() {
    const [hidePergunta, setHidePergunta] = React.useState(false)
    const [hideQuestion, setHideQuestion] = React.useState(false)
    const [hideAnswer, setHideAnswer] = React.useState(false)
    function showQuestion() {
        setHidePergunta("false")
    }
    return (
        <div className="content">
            <header>
                <img src="./images/logo-pequeno.png" alt="logo" />
                <h2 className="logo">ZapRecall</h2>
            </header>
            <div onClick={() => setHidePergunta(!hidePergunta)} className={hidePergunta ? "hide" : "carta pergunta flex-center"}>
                Pergunta x
                <ion-icon size="large" name="play-outline"></ion-icon>
            </div>
            <div className="carta questao">
                O que é JSX?
                <img src="./images/setinha.png" alt="virar"/>
            </div>
            <div className="carta questao">
                JSX é uma sintaxe para
                escrever HTML dentro do JS
                <div className="botoes flex-center">
                    <button className="red">Não lembrei</button>
                    <button className="orange">Quase não lembrei</button>
                    <button className="green">Zap!</button>
                </div>
            </div>
        </div>
    )
}