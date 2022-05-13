
export default function Home({setInit, setMeta}) {

    function setvalue() {
        setMeta(2);
        setInit(false);
    }
    return (
        <div className="home flex-center">
            <img src="./images/logo.png" alt="logo"/>
            <h1 className="logo">ZapRecall</h1>
            <input placeholder="Digite sua meta de zaps..."  min="1"></input>
            <button onClick={setvalue}>Iniciar Recall!</button>
        </div>
    )
}