//import { useRef } from "react"
import Button from "../elementary_components/buttons"

function Header({pageContent,setFormulaire,setId_bien,btnAcceuil,btnBiens,btnPaiements,btnlogin,btnregister,btnlogout,btnDashboard})
{
    const listbtn = [btnAcceuil,btnBiens,btnPaiements,btnlogin,btnregister,btnlogout,btnDashboard]   
    return <header>
        <div className="headerLogo">
            <img src="logo-a6Z3Vovi.png" alt="Luci-immo" style= {{height: "50px", width: "auto"}}/>
            <span className="fs-4 fw-bold"style={{color : "#983cdf"}} >Luci-immo</span>
        </div>
        <nav>
            <Button 
                className="menuselected" pageContent={pageContent} page="acceuil"  
                formulaire ="" setFormulaire={setFormulaire} 
                ref={btnAcceuil} listBtn={listbtn}
            >
                Acceuil
            </Button>
            <Button 
                pageContent={pageContent} page="biens"  
                formulaire ="" setFormulaire={setFormulaire} 
                setId_bien={setId_bien} id_bien={""}
                ref={btnBiens} listBtn={listbtn}
            >
                Biens
            </Button>
            {localStorage.getItem("connecter")=="true" && <Button 
                pageContent={pageContent} page="paiement"  
                formulaire ="" setFormulaire={setFormulaire}
                setId_bien={setId_bien} id_bien={""} 
                ref={btnPaiements} listBtn={listbtn}
            >
                Paiements
            </Button>}

            {(localStorage.getItem("connecter")=="true" && JSON.parse(localStorage.user).role=="proprietaire") && <Button 
                pageContent={pageContent} page="Dashboard"  
                formulaire ="" setFormulaire={setFormulaire}
                setId_bien={setId_bien} id_bien={""} 
                ref={btnDashboard} listBtn={listbtn}
            >
                Dashboard
            </Button>}
        </nav>
        {localStorage.getItem("connecter") !="true" && <div className="loginBtn">
            <Button 
                className="hbtn" pageContent={pageContent} page="auth" 
                formulaire ="login" setFormulaire={setFormulaire} 
                setId_bien={setId_bien} id_bien={""}
                ref={btnlogin} listBtn={listbtn}
            >
                Se connecter
            </Button>
            <Button 
                className="hbtn" pageContent={pageContent} page="auth" 
                formulaire="register" setFormulaire={setFormulaire} 
                setId_bien={setId_bien} id_bien={""}
                ref={btnregister} listBtn={listbtn}
            >
                S'inscrire
            </Button>
        </div>}
        {localStorage.getItem("connecter") =="true" && <div className="loginBtn">
            <Button 
                id="logout"
                className="hbtn" pageContent={pageContent} page="logout" 
                formulaire="logout" setFormulaire={setFormulaire} 
                setId_bien={setId_bien} id_bien={""}
                ref={btnlogout} listBtn={listbtn}
            >
                Se Deconnecter
            </Button>
             </div>}
             
    </header>
}

export default Header