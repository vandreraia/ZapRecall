
import Footer from "./Footer";
import Cards from "./Cards";
import React from "react"
import Home from "./Home";

export default function Content() {
    const [init, setInit] = React.useState(true)
    const [complete, setComplete] = React.useState(0)
    const [meta, setMeta] = React.useState(0)
    const [deck, setDeck] = React.useState()
    const [icon, setIcon] = React.useState([])
    let cards = [];

    if (deck === "JS 1") {
        cards = [{
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        }, {
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        }, {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula"
        }, {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        }, {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        }, {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        }, {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes"
        }, {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }];
    } else if (deck === "JS 2") {
        cards = [{
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        }, {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }];
    } else if (deck === "teste 1") {
        cards = [{
            question: "teste?",
            answer: "Teste!"
        }, {
            question: "TESTE?!",
            answer: "TESTE!!"
        }];
    } else if (deck === "teste 2") {
        cards = [{
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        }, {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        }];
    }
    function comparador() {
        return Math.random() - 0.5;
    }

    cards.sort(comparador);
    //cards = cards.slice(6)
    return (
        <>
            {
                init ? <Home setInit={setInit} setMeta={setMeta} setDeck={setDeck}/> :
                    <>
                        <div className="content">
                            <header>
                                <img src="./images/logo-pequeno.png" alt="logo" />
                                <h2 className="logo">ZapRecall</h2>
                            </header>
                            {cards.map((card, index) => <Cards index={index} key={index} question={card.question} answer={card.answer} setComplete={setComplete} complete={complete} setIcon={setIcon} icon={icon} />)}
                        </div>
                        <Footer setComplete={setComplete} complete={complete} size={cards.length} setIcon={setIcon} icon={icon} meta={meta} setInit={setInit}/>
                    </>
            }
        </>
    )
}