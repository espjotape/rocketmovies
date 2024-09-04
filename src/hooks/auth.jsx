import { createContext, useContext} from "react";

export const AuthContext = createContext()

function AuthProvider({ children }) {
  return(
    <AuthContext.Provider value={{ name: 'João Pedro Espindola', email: 'jpespindola2210@gmail.com'}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const data = useContext(AuthContext)
  console.log("MEU CONTEXTO =>", data)
}

export { AuthProvider , useAuth}