
import { createContext } from "react";
//count setCount.
export const CountContext = createContext(0,0);

export const increaseCount = createContext((count)=> count+1);
export const decreaseCount = createContext((count)=> count-1);