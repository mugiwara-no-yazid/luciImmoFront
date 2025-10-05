import Detail from "./components/views/Detail"
import Acceuil from "./components/views/acceuil"
import Header from "./components/header/header"
import Authpage from "./components/views/Authpage"
import { useRef, useState } from "react"
import Dashboard from "./components/views/dashboard"
function App()
{
  const [pageContent,setPageContent] = useState("acceuil")
  const [formulaire,setFormulaire]= useState("")
  const [id_bien,setId_bien] = useState("")
  const btnAcceuil = useRef(null)
    const btnBiens= useRef(null)
    const btnPaiements = useRef(null)
    const btnlogin = useRef(null)
    const btnregister = useRef(null)
    const btnlogout = useRef(null)
    const btnDashboard= useRef(null)
  if(pageContent == "logout")
  {
    localStorage.clear()
  }

return <>
<Header pageContent={setPageContent} setFormulaire={setFormulaire} 
btnAcceuil={btnAcceuil} btnBiens={btnBiens} btnPaiements={btnPaiements} btnlogin={btnlogin} btnregister={btnregister} btnlogout={btnlogout} btnDashboard={btnDashboard}></Header>
{pageContent =="detail" && <Detail id_bien={id_bien}></Detail> }
{pageContent == "auth" && <Authpage pageContent={setPageContent} setFormulaire={setFormulaire} form={formulaire} setId_bien={setId_bien}></Authpage>}
{(pageContent == "acceuil" || pageContent == "logout") && <Acceuil setId_bien={setId_bien} pageContent={setPageContent} setFormulaire={setFormulaire} btnBiens={btnBiens} btnregister={btnregister}/>}
{pageContent =="Dashboard" && <Dashboard formulaire={formulaire} setFormulaire={setFormulaire} ></Dashboard> }
</>


}
export default App
