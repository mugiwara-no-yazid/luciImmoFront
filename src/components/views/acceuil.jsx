import Immo from '../listImmo/immo' 
import Button from '../elementary_components/buttons'
import FooterComponent from '../footer/footerComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../globalvar'

export default function Acceuil ({pageContent,setFormulaire,btnBiens,btnregister,btnAcceuil}){
    let [chiffre,setChiffre] = useState({})
    useEffect((()=>
    {axios.get(`${BaseUrl}/api/statistique`)
        .then(res=>{
            if(res.data.success)
            {
                setChiffre(res.data.data)
            }
            else{
                setChiffre({message:"Une erreur est survenu reesayée dans quelques instant"})
            }
        }) .catch(()=>{setChiffre({message:"Une erreur est survenu reesayée dans quelques instant"})})
    }
    ),[])

    return <div className="d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
            <FirstSection/>
            <PresentationSection/>
            {chiffre.message && <div style={{height:"25vh",display:"flex",alignItems:"center",justifyContent:"center"}}><h2>{chiffre.message}</h2></div>}
            {!chiffre.message && <StatistiqueSection chiffre={chiffre}/>}
            {chiffre.maisonPremium && <BienPremium ImmoPremium={chiffre.maisonPremium} pageContent={pageContent}  btnAcceuil={btnAcceuil} btnBiens={btnBiens}/>}
            {localStorage.getItem("connecter") != "true" && <InvitationSection pageContent={pageContent} setFormulaire={setFormulaire} btnAcceuil={btnAcceuil} btnBiens={btnBiens}btnregister={btnregister} />}
            
    </main>
    <FooterComponent/>
    </div>  
}

function FirstSection()
{
    return <section className="hero-section text-white d-flex align-items-center justify-content-center" >
            
            <div className="content text-center">
                <h1 className="display-4 fw-bold">Trouvez votre logement idéal</h1>
                <p className="lead">Luci-immo vous connecte aux meilleurs biens immobiliers. Recherchez, consultez et réservez en toute confiance.</p>
                
                <div className="search-bar d-flex flex-column flex-md-row align-items-center bg-white p-4 justify-content-center gap-3 mt-4 w-75 mx-auto rounded shadow">
                <div className=" flex-fill border rounded search-input">
                    <input type="search" className="form-control form-control-lg border-0" placeholder="Ville, quartier, adresse..."/>
                </div>
                <div className=" flex-fill">
                    <select className="border"  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" style={{color: "black",width:"150px"}} aria-expanded="false">
                        <option value="" disabled selected>Type de bien</option>
                        <option value="Appartement">Appartement</option>
                        <option value="Maison">Maison</option>
                        <option value="Studio">Studio</option>
                        <option value="Studio">Terrain</option>
                    </select>
                </div>
                    <button className="btn btn-primary btn-lg d-flex align-items-center gap-2" style={{backgroundColor: "slateblue"}}>
                        <i className="bi bi-search"></i> Rechercher
                    </button>
                </div>
            </div>
        </section>

}
function PresentationSection ()
{
    return <section className="d-flex flex-column final-cta-section py-5 p-5">
                <h2>Notre mission</h2>
                <p style={{color:"black",textAlign:"justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore vero enim ipsum. Tenetur, nobis commodi excepturi velit veritatis eveniet placeat accusamus expedita praesentium id iusto consequatur quae, ullam nostrum nihil.
                Nostrum ipsum itaque doloribus autem atque dolore. Id, eius, nihil alias rem accusamus asperiores necessitatibus officia earum praesentium voluptate debitis fuga tempora veniam soluta optio culpa dolores saepe explicabo voluptas!
                Voluptatem atque blanditiis voluptates veniam totam. Et, repellat hic eveniet explicabo expedita sunt molestias tenetur facere aliquid magni, perferendis odio magnam necessitatibus nesciunt, tempora voluptas ipsam adipisci delectus possimus debitis.
                Enim reiciendis veritatis suscipit, sequi consequuntur nesciunt natus aspernatur debitis veniam neque aliquid sed nisi accusamus officia labore minus nam corporis aut ab soluta dolor id quam! Fugit, error expedita?
                Ex enim ea laborum at ducimus? Explicabo suscipit alias praesentium placeat! Ipsa doloremque nihil, voluptas molestiae numquam quaerat modi excepturi pariatur, odio incidunt tempora possimus commodi nobis dignissimos, eaque corrupti!
                Vero soluta possimus fugit tempora temporibus est placeat, minus rem blanditiis aperiam nemo, consequuntur unde quo maxime reiciendis! Et suscipit itaque quae quidem perspiciatis consequatur deleniti iste, earum excepturi officiis!</p>
        </section>
}

function StatistiqueSection({chiffre})
{
    return <section className=" mt-5 bg-white">
            <h2>Nos Statistiques</h2>
            <article className="d-flex flex-row justify-content-around align-items-center text-center py-4 mt-5 bg-white">
                <div className="d-flex flex-column align-items-center icon-div">
                    <div className="stat-icon mb-2">
                    <i className="bi bi-house-door" style= {{color: "rgb(98, 36, 221)"}}></i>
                    </div>
                    <div className="fw-bold fs-3">{chiffre.maisonDispo}+</div>
                    <div className="text-muted">Biens disponibles</div>
                </div>       
                <div className="d-flex flex-column align-items-center icon-div">
                    <div className="stat-icon mb-2">
                    <i className="bi bi-people" style={{color: "rgb(255, 162, 12)"}}></i>
                    </div>
                    <div className="fw-bold fs-3">{chiffre.maisonLouees}+</div>
                    <div className="text-muted">Clients satisfaits</div>
                </div>
                <div className="d-flex flex-column align-items-center icon-div">
                    <div className="stat-icon mb-2">
                    <i className="bi bi-graph-up" style={{color: "rgb(144, 59, 241)"}}></i>
                    </div>
                    <div className="fw-bold fs-3">{chiffre.croissanceAnuelle}%</div>
                    <div className="text-muted">Croissance annuelle</div>
                </div>
            </article>
        </section>
        
}

function BienPremium({ImmoPremium,pageContent,btnBiens,btnAcceuil})
{
    return <section className='mt-5 mb-5' style={{width:"100%"}}>
                <div className="card-text d-flex flex-column align-items-center text-center gap-2">
                    <p className="fs-5 text-white icon-top-bg">🏆 Sélection Premium</p>
                    <h1 className="fs-2 fw-bold">Biens en vedette</h1>
                    <p className="fs-6 text-muted">
                        Découvrez notre sélection des meilleurs biens immobiliers, soigneusement choisis pour leur qualité exceptionnelle.
                    </p>
                </div>
                 <div className="d-flex flex-column align-items-center container mt-2" >
                    <div className="listings">  
                        {ImmoPremium.map((bien)=>{return <Immo 
                             key={bien.id_bien}
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
                    <div className="mt-3">
                        <button type="button" className="btn btn-lg btn-more" onClick={()=>{
                            pageContent('biens')
                            btnAcceuil.current.className=""
                            btnBiens.current.className="menuselected"
                            }} >Voir Plus</button>
                    </div>
                </div>
        </section>
}
function InvitationSection({pageContent,setFormulaire,btnregister,btnBiens,btnAcceuil})
{
    return <section className="final-cta-section py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-3">Rejoignez-nous dès aujourd’hui</h2>
                <p className="mb-4 fs-5 text-muted">Découvrez nos offres et trouvez le logement idéal rapidement.</p>
                
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button 
                    className="btn btn-primary btn-outline-light btn-lg" 
                    pageContent={pageContent} page="auth" 
                    formulaire="register" setFormulaire={setFormulaire}
                    listBtn={[btnregister,btnAcceuil]}
                >
                    S’inscrire
                </Button>
                <Button 
                className="btn btn-outline-light btn-lg"
                pageContent={pageContent} page="biens" 
                formulaire="" setFormulaire={setFormulaire}
                listBtn={[btnBiens,btnAcceuil]}
                >
                    Explorer</Button>
                </div>
            </div>
        </section>
}