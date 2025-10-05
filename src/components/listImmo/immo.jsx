import {devise} from "../../globalvar"
import Button from "../elementary_components/buttons"
export default function Immo({id_bien,imgPrincipal,titre,description,prix,pageContent,setFormulaire,setId_bien})
{
    const alte =`Image de ${titre}`
   return <div className="col-md-4 mt-4 carteImmo">
    <div className="imageImmo">
        <img src={imgPrincipal} alt={alte}/>
    </div>
    <div className="detailImmo">
        <h3><a href="">{titre}</a></h3>
        <p>{description}</p>
        <h3>{prix} {devise}</h3>
    </div>
    <div>
        <Button
         pageContent={pageContent} page="detail"  
        formulaire ="" setFormulaire={setFormulaire} 
        id_bien={id_bien} setId_bien={setId_bien}
        >Voir details</Button>
    </div>
   </div>
}