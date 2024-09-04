import React from "react";
import ReactDOM from "react-dom/client";

import { MyContext } from "./myContext.js"
import { Routes } from "./routes";

import GlobalStyles  from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{name : "João Pedro" , email: "jpespindola@email.com"}}>
      <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
