import { Route, Routes } from "react-router-dom"
import SwitchPage from "./SwitchPage"
import Detail from "./components/views/Detail"
import { useRef, useState } from "react"

function App()
{
  const [pageContent,setPageContent] = useState("acceuil")
    const [formulaire,setFormulaire]= useState("")
    const btnAcceuil = useRef(null)
    const btnBiens= useRef(null)
    const btnPaiements = useRef(null)
    const btnlogin = useRef(null)
    const btnregister = useRef(null)
    const btnlogout = useRef(null)
    const btnDashboard= useRef(null)
return <Routes>
  <Route path="/" element={<SwitchPage formulaire={formulaire} currentPage={pageContent} pageContent={setPageContent} setFormulaire={setFormulaire} 
    btnAcceuil={btnAcceuil} btnBiens={btnBiens} btnPaiements={btnPaiements} btnlogin={btnlogin} btnregister={btnregister} btnlogout={btnlogout} btnDashboard={btnDashboard}/>}/>
  <Route path="/bien/:id_bien" element={<Detail formulaire={formulaire} currentPage={pageContent} pageContent={setPageContent} setFormulaire={setFormulaire} 
    btnAcceuil={btnAcceuil} btnBiens={btnBiens} btnPaiements={btnPaiements} btnlogin={btnlogin} btnregister={btnregister} btnlogout={btnlogout} btnDashboard={btnDashboard}/>}/>
  </Routes>
}
export default App
