import { useContext, useEffect } from "react";
import ThemeContext from "./ContextDeclaration";
function Sample() {

    const theme = useContext(ThemeContext);

    useEffect(()=> {
        console.log(theme);
    },[]);

    return (<>
        <button className={theme}>{theme}</button >
    </>)
}

export default Sample;