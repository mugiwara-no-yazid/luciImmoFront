import axios from "axios"
import { useEffect, useState } from "react"
import { BaseUrl } from "../../globalvar"
import Immo from "../listImmo/immo"
import { useRef } from "react"

function ListeBien()
{
    const [allBiens,setBiens] = useState([])
    const listRef = useRef()
    useEffect((()=>
    {axios.get(`${BaseUrl}/api/biens`)
        .then(res=>{
            if(res.data.success)
            {
                setBiens(res.data.data)
            }
            else{
                setBiens({message:"Une erreur est survenu reesayée dans quelques instant"})
            }
        }) .catch(()=>{setBiens({message:"Une erreur est survenu reesayée dans quelques instant"})})
    }
    ),[])
    let Biens = allBiens
    function filterByType(e){
              if  (e.target.value != "Type")
                {
                    Biens = allBiens.filter(bien=> {
                        console.log("bien",bien.type_bien.toLowerCase());
                        console.log("target",e.target.value.toLowerCase());
                        
                        return bien.type_bien.toLowerCase() ==  e.target.value.toLowerCase()
                    })
                        console.log(Biens);
                }   
            }
    return <><div className="header">
        <div>
            <h1>Tous les biens</h1>
            <div className="header-subtitle">{Biens.length} biens disponibles</div>
        </div>
        <div className="header-actions">
            <button className="icon-btn" onClick={()=>{
                listRef.current.className = "listings"
            }}>⊞</button>
            <button className="icon-btn" onClick={()=>{
                listRef.current.className = "largeListing"
            }}>☰</button>
        </div>
    </div>

    <div className="search-section">
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Rechercher par ville, quartier..."/>
            <select className="filter-select" onChange={filterByType}>
                <option>Type</option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Studio</option>
            </select>
            <select className="filter-select">
                <option>Chambres</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
            </select>
            <button className="filter-btn">
                <span>⚙</span> Filtres
            </button>
        </div>
    </div>

    <div className="filters-bar">
        <button className="filter-chip">Tous les biens</button>
        <button className="filter-chip premium">
            <span>⭐</span> 3 Premium
        </button>
    </div>

    <div className="listings" ref={listRef}>
         {Biens.map((bien)=>{return <Immo key={bien.id_bien}
    id_bien={bien.id_bien} 
    imgPrincipal={bien.imgPrincipal? bien.imgPrincipal :"hero-image.jpg"}
    type_bien= {bien.type_bien}
    ville={bien.ville}
    nb_pieces={bien.nb_pieces}
    surface ={bien.surface}
    description = {bien.description}
    prix ={bien.prix}
    note= {bien.note}
    ></Immo> })}  
    </div>
    </>

}
export default ListeBien