import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [ data, setData ] = useState({})
  
  async function signIn({ email, password}){
    
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


      setData({user, token })

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel entrar.")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@rocketnotes:token")
    localStorage.removeItem("@rocketnotes:user")

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token")
    const user = localStorage.getItem("@rocketnotes:user")

    if( token && user) {
      // Jeito que o prof usou o código porem no vscode dá um erro de = "The computed expression can be simplified without the use of a string literal.biomelint/complexity/useLiteralKeys"
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Jeito que o chatgpt sugeriu corrigir
      //api.defaults.headers.common["Authorization"] = "Bearer " + token;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{ 
      signIn,
      user: data.user,
      signOut
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
 return context
}

export { AuthProvider , useAuth }