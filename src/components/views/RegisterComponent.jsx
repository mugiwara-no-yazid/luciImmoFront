import { BaseUrl } from "../../globalvar";
import axios from "axios";

function RegisterComponent({setMessage,setStyle})
{
   
    function handleSubmit(e)
    {
        e.preventDefault()
        const data = new FormData(e.target)
        const nom = data.get("nom") 
        const prenom = data.get("prenom")
        const phone =data.get("phone")
        const password = data.get("password")
        const confirmpsswd = data.get("confirmpassword")
        const role = data.get("my-dropdown")
        const email = data.get("email")
        const psswdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.\d)(?=.[@!!%*?&]{8,})/
        const emailregex = /^[^\s@]+[^\s@]+\.[^\s@]+ /
        if (
            nom=="" ||
            prenom==""||
            email==""||
            password==""||
            phone==""||
            role==""||
            confirmpsswd ==""
        ){
            setMessage({message : "Veuillez remplis tous les champs du formulaire"})
            return
    }
    /*if(!emailregex.test(email))
    {
        setMessage({message : "Mail invalide"})
        return
    }
    if(!psswdRegex.test(password))
    {
        setMessage({message : "Votre mot de passe n'est pas securiser"})
        return
    }*/

    if(confirmpsswd !=password)
        {
            setMessage({message : "Les mots de passe ne corespondent pas"})
            setStyle("alert alert-danger")
            return
    }
        
        axios.post(`${BaseUrl}/api/auth/register`,
        {
            nom : `${nom} ${prenom}`,
            email : email,
            mot_de_passe : password,
            telephone : phone,
            role : role
        },{
            headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res=>{
            if(res.data.success)
            {
                setMessage({message :"Inscriptions reussi verifiez votre boite mail pour activer votre compte"})
                setStyle("alert alert-success")
            }
        })
        .catch(e=>{
            setMessage(e.response.data)
            setStyle("alert alert-danger")
        })
    }
     
    return <div>
    <form onSubmit={handleSubmit}>
    <label htmlFor="eamil">Type de compte</label>
	<div className="input-field">
		<select className="my-dropdown" name="my-dropdown">
			<option value="locataire">🏠 Locataire</option>
			<option value="proprietaire">🏢 Propriétaire</option>
		</select>
	</div>
	<div className="input-name">
		<div className="prenom">
			<label htmlFor="prenom">Prénom</label>
			<div className="input-display">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
                    stroke="purple" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                </svg>
			    <input type="text" id="prenom" name="prenom" required/>
            </div>
	    </div>

	    <div className="nom">
			<label htmlFor="nom">Nom</label>
            <div className="input-display">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
                    stroke="purple" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                </svg>
			    <input type="text" id="nom" name="nom" required/>
            </div>
		</div>
	</div>

    <div className="input-field">
	    <label htmlFor="email">Email</label>
        <div className="input-group password-group" style={{display:"flex", alignItems:"center"}}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="purple" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <polyline points="2,6 12,13 22,6"></polyline>
            </svg>
            <input type="email" id="email" name="email" placeholder="votre.email@gmail.com" required/>
        </div>
    </div>

    <div className="input-field">
	    <label htmlFor="phone">Telephone</label>
        <div className="input-group password-group" style={{display:"flex", alignItems:"center"}}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
                stroke="purple" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                        19.79 19.79 0 0 1-8.63-3.07
                        19.5 19.5 0 0 1-6-6
                        19.79 19.79 0 0 1-3.07-8.63
                        A2 2 0 0 1 4.92 2h3
                        a2 2 0 0 1 2 1.72
                        c.12.92.37 1.81.73 2.65
                        a2 2 0 0 1-.45 2.11L9.1 9.9
                        a16 16 0 0 0 6 6l1.42-1.42
                        a2 2 0 0 1 2.11-.45
                        c.84.36 1.73.61 2.65.73
                        A2 2 0 0 1 22 16.92z"/>
            </svg>
            <input type="tel" id="phone" name="phone" placeholder="+229 01 52 46 20 78" required/>
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
                <input type="password" id="password" name="password" placeholder="*****" required/>     
        </div>
    </div>

    <div className="input-field">
        <label htmlFor="password">Confirmez le mot de passe</label>
        <div className="input-group password-group" style={{display:"flex", alignItems:"center"}}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="purple" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    <circle cx="12" cy="16" r="1"></circle>
                </svg>
                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="*****" required/>     
        </div>
    </div>
	<div>
		<input type="checkbox" name="remember" id="remember"/>
        <label htmlFor="remember" style={{paddingLeft:"5px"}}>J'accepte les conditions d'utilisations</label>
	</div>
    <button type="submit">S'inscrire</button>`
</form>
    
    </div>
}
export default RegisterComponent