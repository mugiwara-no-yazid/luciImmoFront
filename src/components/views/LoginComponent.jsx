import axios from "axios"

import { BaseUrl } from "../../globalvar"

function LoginComponent({pageContent,setMessage,setStyle})
{
   
    function handleSubmit(e)
    {
        e.preventDefault()
        const data = new FormData(e.target)
        
        axios.post(`${BaseUrl}/api/auth/login`,{email: data.get("email"),mot_de_passe: data.get("password") },{
            headers :{
                'Content-Type': 'application/json'
                }
            }).then(data=>{
           if(data.data.success)
           {
            localStorage.setItem("connecter",true)
             localStorage.setItem("token",data.data.token)
            localStorage.setItem("user",JSON.stringify({
                nom:data.data.user.nom,
                email :data.data.user.email,
                id_utilisateur :data.data.user.id_utilisateur,
                role : data.data.user.role,
                telephone : data.data.user.telephone,
                photo_profil : data.data.user.photo_profil,
                etat : data.data.user.etat
            }))
            pageContent("acceuil")
           }
           else{
            const message= data.data? data.data :{message : "Le site est indisponible pour le moment revenez plus tard...."}
            setMessage(message)
            setStyle("alert alert-danger")
           }
        })
        
        .catch(e=>{ 
            let message=null
            if(!e.response)
            {
                message={message : "Le site est indisponible pour le moment revenez plus tard...."}
                setStyle("alert alert-danger")
            }
            else{
                message = e.response.data
            }
            setMessage(message)
            })
        
    }
    
    return <div>

    
    <form onSubmit={handleSubmit}>
        <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-group password-group" style={{display:"flex", alignItems:"center"}}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="purple" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <polyline points="2,6 12,13 22,6"></polyline>
                </svg>
                <input style={{paddingLeft:"2vw"}} type="email" id="email" name="email" placeholder="votre.email@gmail.com" required/>
            </div>
        </div>
        <div className="input-field">
            <label htmlFor="password">Mot de passe</label>
            <div className="input-group password-group" style={{display:"flex", alignItems:"center"}}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="purple" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    <circle cx="12" cy="16" r="1"></circle>
                </svg>
                    <input style={{paddingLeft:"2vw"}} type="password" id="password" name="password" placeholder="*****" required/>
            </div>
        </div>
        <div className="form-foot">
            <div className="remember">
                <input type="checkbox" name="remember" id="remember"/>
                <label htmlFor="remember" style={{paddingLeft:"5px"}}>Se souvenir de moi</label>
            </div>
            <a href="#">Mot de passe oublié?</a>
        </div>
        <button type="submit" >Se connecter</button>`
    </form>
</div>
    
}
export default LoginComponent