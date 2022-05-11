import React from "react"

export default function Home() {
    const [hide, setHide] = React.useState(false)

    return (
        <div className={hide ? "hide" : "home flex-center hide"}>
            <img src="./images/logo.png" alt="logo"/>
            <h1 className="logo">ZapRecall</h1>
            <button onClick={() => setHide(!hide)}>Iniciar Recall!</button>
        </div>
    )
}