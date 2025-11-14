import axios from "axios";
import { BaseUrl, devise } from "../../globalvar";
import { useRef, useState } from "react";
import { useEffect } from "react";
import {useParams } from "react-router-dom";
import Header from "../header/header";

function Detail ({pageContent,
setFormulaire,
btnAcceuil,
btnBiens,
btnPaiements,
btnlogin,
btnregister,
btnlogout,
btnDashboard})
{
    const {id_bien} = useParams()
    const [bien,SetBien]= useState(null)
    const texte=useRef(null)
    const [message,setMessage]= useState("")
    
   
    useEffect((()=>{
        axios.get(`${BaseUrl}/api/biens/${id_bien}`)
    .then(res=>{
        {
            SetBien(res.data.data)     
        }
    })
    .catch(e=>{
        setMessage(e.response.data.message)
    })

    }),[id_bien])
    
function handleSubmit(e)
{
    e.preventDefault()
    
    axios.post(`${BaseUrl}/api/biens/commentaires`,{
            id_bien : id_bien,
            id_utilisateur : JSON.parse(localStorage.user).id_utilisateur,
            contenu : texte.current?.value
        },{
            headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(res=>{
            console.log(res);
            if(res.data.success)
            {
                setMessage("Merci pour votre commentaire")
            }
            else {setMessage("Nous n'avons pas pu enregisré votre commentaire resseayer dans quelque instant")}
        })
        .catch(()=>{setMessage("Nous n'avons pas pu enregisré votre commentaire resseayer dans quelque instant")})
}
if(bien)
{return <>
<Header pageContent={pageContent} setFormulaire={setFormulaire} 
btnAcceuil={btnAcceuil} btnBiens={btnBiens} btnPaiements={btnPaiements} btnlogin={btnlogin} btnregister={btnregister} btnlogout={btnlogout} btnDashboard={btnDashboard}></Header>
<div className="card shadow rounded-3 overflow-hidden" style={{paddingTop:"2vh"}}>
  <div id="estateCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/image/hero-image.jpg" className="d-block w-75 h-75" style={{position:"relative",left:"13%"}} alt="Estate Image 1"/>
      </div>
    </div>    
  </div>
  <div className="card-body p-4 estate-details">
    <div className="estate-info">
        <SectionInfo bien={bien}/>
        <hr/>
        <SectionCommentaire commentaire={bien.Commentaires}/>
    </div>
    <hr/>
    {localStorage.getItem("connecter") == "true" && (
    
    <SectionPost handleSubmit={handleSubmit} texte={texte}/>)}
    {localStorage.getItem("connecter") != "true" && <div>Connectez vous pour pouvoir commenter</div>}
    
  </div>
</div>
</>}
return <>
 <Header pageContent={pageContent} setFormulaire={setFormulaire} 
btnAcceuil={btnAcceuil} btnBiens={btnBiens} btnPaiements={btnPaiements} btnlogin={btnlogin} btnregister={btnregister} btnlogout={btnlogout} btnDashboard={btnDashboard}></Header>
<div style={{textAlign:"center",marginTop:"20vh"}}>
    <h2>{message}</h2>
</div>
</>

    
}
function SectionInfo({bien})
{
    return <div>
        <h5 className="card-title mb-1">{bien.titre} {bien.type_bien}</h5>
        <p className="text-muted mb-1">📍Localisation : {bien.ville}, {bien.adresse}</p>
        <p className="text-muted mb-1">Description : {bien.description}</p>
        <p className="fw-bold text-primary fs-5">Prix : <strong>{bien.prix}</strong> {devise}</p>
    </div>
}
function SectionCommentaire({commentaire})
{
    if(commentaire)
    {
        if(commentaire.length ==0 )
            return <div className="noReviewsMessage text-muted" >Aucun commentaire retrevouvé.</div>
        else
        {
            return <div>
                <h6 className="fw-semibold">Commentaires</h6>
                <div className="small text-muted">
                {commentaire.map(com=><p key={com.Utilisateur.nom}><strong>{com.Utilisateur.nom} : </strong>{com.contenu}</p>)}
                </div>    
            </div>
        }
    }
    return <div className="noReviewsMessage text-muted" >Aucun commentaire retrevouvé.</div>   
}

function SectionPost({handleSubmit,texte})
{
    return <div>
        <h6 className="fw-semibold">Laissez un commentaire</h6>
        <form className="mb-3" onSubmit={handleSubmit}>
            <textarea ref={texte} className="form-control" rows="3" placeholder="Ecrivez votre commentaire..." id="reviewText" name="reviewText"></textarea>
            <button className="btn btn-primary w-100" style={{marginTop:"5vh"}}id="submitReview">Poster le commentaire</button>
        </form>
    </div>
}
export default Detail