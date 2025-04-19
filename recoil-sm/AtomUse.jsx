import { RecoilRoot, useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { countAtom, filterCountAtom } from "./store/atoms/count";

// have to use Recoil Root to use any vars defined in atom.

function AtomUse() {
    return (
        <>
            <RecoilRoot>
                <Count />
                <Buttons />
            </RecoilRoot>
        </>
    )
}

function Count() {
    const count = useRecoilValue(countAtom);
    return (<div>
        {count}
    </div>)
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    const count1 = useRecoilValue(filterCountAtom);
    console.log(count1);
    // const [useRecoilValue, useSetRecoilState] = useRecoilState(x);
    return (<div>
        <div>
            <button onClick={() => {
                setCount((count) => count + 1);
            }}>Incr</button>
            <button onClick={() => {
                setCount((count) => count - 1);
            }}>Decr</button>
        </div>

        {count1 ? <p> Render me when count is even</p> : ""}


    </div>)
}

export default AtomUse;