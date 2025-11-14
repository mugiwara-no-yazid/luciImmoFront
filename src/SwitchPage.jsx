import Acceuil from "./components/views/acceuil"
import Header from "./components/header/header"
import Authpage from "./components/views/Authpage"
import ListeBien from "./components/views/ListeBien"
import Dashboard from "./components/views/dashboard"

function SwitchPage({pageContent,
setFormulaire,
btnAcceuil,
btnBiens,
btnPaiements,
btnlogin,
btnregister,
btnlogout,
btnDashboard,currentPage,formulaire})
{
   
  if(currentPage == "logout")
  {
    localStorage.clear()
  }


return <>
<Header pageContent={pageContent} setFormulaire={setFormulaire} 
btnAcceuil={btnAcceuil} btnBiens={btnBiens} btnPaiements={btnPaiements} btnlogin={btnlogin} btnregister={btnregister} btnlogout={btnlogout} btnDashboard={btnDashboard}></Header>
{currentPage == "auth" && <Authpage pageContent={pageContent} setFormulaire={setFormulaire} form={formulaire}></Authpage>}
{(currentPage == "acceuil" || currentPage == "logout") && <Acceuil pageContent={pageContent} setFormulaire={setFormulaire} btnAcceuil={btnAcceuil} btnBiens={btnBiens} btnregister={btnregister}/>}
{currentPage =="Dashboard" && <Dashboard formulaire={formulaire} setFormulaire={setFormulaire} ></Dashboard> }
{currentPage =="biens" && <ListeBien formulaire={formulaire} setFormulaire={setFormulaire} ></ListeBien> }
</>


}
export default SwitchPage
