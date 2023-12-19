import React from "react";
import { createContext, useContext } from "react"


export const IncrementContext = React.createContext<ImportContextType>({
  incrementAmount: 10
});

type ImportContextType = {
  incrementAmount: Number,
}

