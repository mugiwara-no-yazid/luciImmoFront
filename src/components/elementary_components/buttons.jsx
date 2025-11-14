import { useNavigate } from "react-router-dom"

function Button({id_bien,children,pageContent,page,formulaire,setId_bien,setFormulaire,listBtn,...props})
{ const navigate = useNavigate()
    return<button {...props} onClick={(e)=>{
        navigate("/")
        pageContent(page)
        setFormulaire(formulaire)
        if(setId_bien)
        {
            setId_bien(id_bien)
        }
       if (listBtn) {
         listBtn.map(btn=>{
                       
            if(btn.current)
            {
                btn.current.className =""
            }
            if(e.target.textContent == "Se Deconnecter" || e.target.textContent == "Explorer" || e.target.textContent == "S’inscrire")
            {
                listBtn[0].current.className="menuselected"
            } 
        })
       listBtn.find(btn=>{
            if(btn.current)
                return btn.current.textContent == e.target.textContent
        }).current.className="menuselected"
         
       }
        
    }}>
        {children}
        </button>
}

export default Button