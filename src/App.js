import React from "react"
import Home from "./Components/Home";
import Content from "./Components/Content";

export default function App() {
    const [init, setInit] = React.useState(false)
    return (
        <div>
            {init ? <Home  setInit={setInit}/> : <Content />}
        </div>
    );
}
