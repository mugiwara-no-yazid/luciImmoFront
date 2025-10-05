import { useRef, useState } from "react"
import LoginComponent from "./LoginComponent"
import RegisterComponent from './RegisterComponent'

function Authpage ({pageContent,form,setFormulaire })
{
    const con = useRef (null)
    const ins = useRef (null)
     const [message,setMessage]= useState(null)
     const [style,setStyle]= useState(null)
    const formulaire = form
    
    
    return <div>
        <div className="authcontainer">
        <div className="container">
        <div className="main">
            <div className="carde">
                <div className="head">
                    <img src="logo-a6Z3Vovi.png" alt="Luci-immo" style= {{height: "50px", width: "auto"}}/>
                    <span className="fs-4 fw-bold"style={{color : "#983cdf"}} >Luci-immo</span>
                    <span>Votre plateforme immobilière de confiance</span>
                </div>
                {message && <div className={style} style={{textAlign:"center"}}>{message.message}</div>}
                <div className="form">
                    <h2>Bienvenue</h2>
                    <div className="form-content">
                        
                        <div>
                            <div className="div-btns" style={{justifyContent:"space-around"}}>
                                <button ref={con} id={formulaire == "login"?"selected":""} onClick={(e)=>{
                                    setFormulaire("login")
                                    e.target.id = "selected" 
                                    ins.current.id = " "    
                                }}>Connexion</button>
                                <button ref={ins} id={formulaire == "register"?"selected":""} onClick={(e)=>{
                                    con.current.id = " "
                                    e.target.id = "selected" 
                                    setFormulaire("register")
                                }}>Inscription</button>
                            </div>
                           {formulaire == "login" && <LoginComponent pageContent={pageContent} setMessage={setMessage} setStyle={setStyle} ></LoginComponent>}
                           {formulaire== "register" && <RegisterComponent pageContent={pageContent} setMessage={setMessage} setStyle={setStyle}></RegisterComponent>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    </div>
    
}

export default Authpage