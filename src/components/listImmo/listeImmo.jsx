import Immo from "./immo"
export default function ListeImmo({pageContent,setFormulaire,setId_bien})
{
    let titre = ""
    const data = []

   return <div className="pagecontainer">
    <h1>{titre}</h1>
    <div className="listeBien">
        {data && data.data.map(bien=>{
            const imgPrincipale= bien.photos.find(photo=>photo.is_principale)
            const imgSrc = imgPrincipale ? `/${imgPrincipale.url_image}` : "default.PNG"
            return <Immo key={bien.id_bien}
            imgPrincipal={imgSrc}
            titre={bien.titre}
            description={bien.description}
            prix ={bien.prix}
            pageContent={pageContent}
            setFormulaire={setFormulaire}
            setId_bien={setId_bien}
            id_bien={bien.id_bien}
        />
        })}
        
    </div>
   </div>
}