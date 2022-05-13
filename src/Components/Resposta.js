export default function Resposta({setCard, setType, answer, setComplete, complete, setIcon, icon}) {
    function setAll(type) {
        setType(type);
        setCard("card");
        setComplete(complete+1);
        setIcon([...icon, type]);
    }
    return (
        <div className="carta questao">
            {answer}
            <div className="botoes flex-center">
                <button onClick={() => setAll("fail")} className="red">Não lembrei</button>
                <button onClick={() => setAll("almost")} className="orange">Quase não lembrei</button>
                <button onClick={() => setAll("success")} className="green">Zap!</button>
            </div>
        </div>
    )
}