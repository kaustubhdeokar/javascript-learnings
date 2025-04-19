import { useContext } from "react"
import { CountContext, decreaseCount, increaseCount } from "./Context"


function PropDrilling() {
    return (
        <>
        </>
    )
}

function Count() {
    const count = useContext(CountContext);
    return (<div>
        {count}
        <Buttons count={count}></Buttons>
    </div>)
}

function Buttons() {
    const incrCount = useContext(increaseCount);
    const decrCount = useContext(decreaseCount);
    return (
        <div>
            <button onClick={() => { incrCount }}>Increase</button>
            <button onClick={() => { decrCount }}>Decrease</button>
        </div>
    )
}


export default PropDrilling;