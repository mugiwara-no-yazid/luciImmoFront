export default function FooterComponent()
{
    return <footer className=" text-center text-white py-3">
    <div className="d-flex flex-wrap justify-content-around text-start gap-4 p-4 m-4 div-foot">
        <div>
            <div>
                <img src="logo-a6Z3Vovi.png" alt="Luci-immo" style={{height: "50px", width: "auto"}}/>
                <span className="fs-4 fw-bold">Luci-immo</span>
            </div>
            <p style={{maxWidth:"25vw",textAlign:"left",marginTop:"2vh"}}>La plateforme immobilière de confiance pour locataires,
            propriétaires et promoteurs.</p>
        </div>
        <div className="d-flex flex-column align-items-start ">
            <ul>
                <h6>Locataires</h6>
                <a href="#">Rechercher un bien</a><br/>
                <a href="#">Consulter les biens</a><br/>
                <a href="#">Payer un loyer</a><br/>
            </ul>
        </div>
        <div>
            <ul>
                <h6>Propriétaires</h6>
                <a href="#">Tableau de bord</a><br/>
                <a href="#">Gérer mes biens</a><br/>
                <a href="#">Suivi de locations</a>
            </ul>
        </div>
        <div>
            <ul>
                <h6>Support</h6>
                <a href="#">Centre d'aide</a><br/>
                <a href="#">Contactez</a><br/>
                <a href="#">Administration</a><br/>
            </ul>
        </div>
    </div>
    <hr className="mx-5"/>
    <div><p>© 2025 My Website — All rights reserved</p></div>
  </footer>
}