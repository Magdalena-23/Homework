import { useState } from "react"


const LifecycleFuncComponent = () => {
    
    const [counter, setCounter] = useState(0)

    const [n, setN] = useState("")

    const increment = () => {
        setCounter(counter + n)
    }

    const decrement = () => {
        setCounter(counter - 10)
    }


    return (
        <div className="container">
            <span>Functional Component</span>
            <h1>{counter}</h1>
            <br />
            <div>
                <input 
                type="number" 
                placeholder="Increment the value by..."
                value={n}
                onChange={(event) => {
                    setN(parseInt(event.target.value))
                }}/>
            </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <br />
        </div>
    )
}


export default LifecycleFuncComponent;