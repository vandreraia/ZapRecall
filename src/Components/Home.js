
export default function Home({setInit}) {

    return (
        <div className="home flex-center">
            <img src="./images/logo.png" alt="logo"/>
            <h1 className="logo">ZapRecall</h1>
            <button onClick={() => setInit(false)}>Iniciar Recall!</button>
        </div>
    )
}