function Button({id_bien,children,pageContent,page,formulaire,setId_bien,setFormulaire,listBtn,...props})
{
    return<button {...props} onClick={(e)=>{
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
        e.target.className = "menuselected"
       }
        
    }}>
        {children}
        </button>
}

export default Button