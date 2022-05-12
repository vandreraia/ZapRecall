export default function Resposta({ setCard , answer }) {
    return (
        <div className="carta questao">
            {answer}
            <div className="botoes flex-center">
                <button onClick={() => setCard("card")} className="red">Não lembrei</button>
                <button onClick={() => setCard("card")} className="orange">Quase não lembrei</button>
                <button onClick={() => setCard("card")} className="green">Zap!</button>
            </div>
        </div>
    )
}