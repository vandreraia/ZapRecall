
export default function Home({ setInit, setMeta, setDeck }) {

    const getMetaValue = (event) => {
        setMeta(event.target.value);
    }

    const getDeckValue = (event) => {
        setDeck(event.target.value);
    }

    function setvalue() {
        setInit(false);
    }

    return (
        <div className="home flex-center">
            <img src="./images/logo.png" alt="logo" />
            <h1 className="logo">ZapRecall</h1>
            <input onChange={getMetaValue} type="number" placeholder="Digite sua meta de zaps..." min="1"></input>
            <input onChange={getDeckValue} list="deck" name="myBrowser" placeholder="Escolha seu deck" />
            <datalist id="deck" >
                <option value="JS 1" />
                <option value="JS 2" />
                <option value="teste 1" />
                <option value="teste 2" />
            </datalist>
            <button onClick={setvalue}>Iniciar Recall!</button>
        </div>
    )
}