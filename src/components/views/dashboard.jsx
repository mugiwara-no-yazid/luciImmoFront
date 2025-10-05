export default function Dashboard({formulaire, setFormulaire})
{
  const form =formulaire ?formulaire : "oki"
  console.log(form);
  
    return <div>
        <SectionTitre/>
        <StatsSection/>
        <div className="container-fluid my-4 px-4">
            <MiniMenu setFormulaire={setFormulaire}/>
            {form}
        </div>
        
    </div>
}
function SectionTitre()
{
    return <div className="container-fluid my-4 px-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <h2 className="fw-bold mb-1">Tableau de bord</h2>
          <p className="text-muted mb-0">
            Gérez vos biens et suivez vos performances
          </p>
        </div>
        <a href="#" className="btn btn-purple mt-3 mt-md-0">
          <i className="bi bi-plus-lg"></i> Ajouter un bien
        </a>
      </div>
    </div>
}

function StatsSection()
{
    return <div className="container-fluid mb-4 px-4">
      <div className="row g-3">
        <div className="col-6 col-md-3">
          <div className="card-stat">
            <div className="mb-1">
              <i className="bi bi-cash-coin fs-3 text-success"></i>
            </div>
            <h5>Revenus totaux</h5>
            <h3>3 590€</h3>
            <small className="text-success">+12%</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-stat">
            <div className="mb-1">
              <i className="bi bi-house-check fs-3 text-primary"></i>
            </div>
            <h5>Biens loués</h5>
            <h3>2/3</h3>
            <small className="text-muted">66%</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-stat">
            <div className="mb-1"><i className="bi bi-people fs-3 text-info"></i></div>
            <h5>Locataires actifs</h5>
            <h3>2</h3>
            <small className="text-info">+1</small>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card-stat">
            <div className="mb-1">
              <i className="bi bi-graph-up-arrow fs-3 text-warning"></i>
            </div>
            <h5>Taux d'occupation</h5>
            <h3>87%</h3>
            <small className="text-success">+5%</small>
          </div>
        </div>
      </div>
    </div>
}

function MiniMenu({setFormulaire})
{
    return <ul
        className="nav nav-pills justify-content-center bg-light rounded-3 p-2 shadow-sm"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active px-4"
            id="overview-tab"
            data-bs-toggle="tab"
            data-bs-target="#overview"
            type="button"
            role="tab"
            onClick={()=>{setFormulaire("vue")}}
          >
            Vue d'ensemble
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link px-4"
            id="properties-tab"
            data-bs-toggle="tab"
            data-bs-target="#properties"
            type="button"
            role="tab"
          >
            Mes biens
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link px-4"
            id="tenants-tab"
            data-bs-toggle="tab"
            data-bs-target="#tenants"
            type="button"
            role="tab"
          >
            Locataires
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link px-4"
            id="finances-tab"
            data-bs-toggle="tab"
            data-bs-target="#finances"
            type="button"
            role="tab"
          >
            Finances
          </button>
        </li>
      </ul>
}

function NotificationSection()
{
    return <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-sm p-3 h-100">
                <h5 className="fw-bold mb-3">Activité récente</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div>
                        <i className="bi bi-dot text-primary fs-4"></i>
                        Paiement reçu de Marie Dubois
                        <br /><small className="text-muted">il y a 2 heures</small>
                      </div>
                      <span className="badge bg-purple fs-6">3500€</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-dot text-primary fs-4"></i>
                    Nouvelle demande de visite pour Studio Bastille
                    <br /><small className="text-muted">il y a 5 heures</small>
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-dot text-primary fs-4"></i>
                    Demande de réparation - Appartement centre-ville
                    <br /><small className="text-muted">il y a 1 jour</small>
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-dot text-primary fs-4"></i>
                    Nouvel avis 5⭐ de Pierre Samuel Mohammed Adbel Tariq
                    Ismaïla
                    <br /><small className="text-muted">il y a 2 jours</small>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-6">
                <div
                  className="card shadow-sm p-3 h-100"
                  style="background-color: #efe8f7"
                >
                  <h5 className="fw-bold mb-3">Actions rapides</h5>
                  <div className="quick-action">
                    <i className="bi bi-plus-circle"></i> Ajouter un nouveau bien
                  </div>
                  <div className="quick-action">
                    <i className="bi bi-calendar-event"></i> Planifier une visite
                  </div>
                  <div className="quick-action">
                    <i className="bi bi-chat-dots"></i> Contacter un locataire
                  </div>
                  <div className="quick-action">
                    <i className="bi bi-bar-chart"></i> Voir les statistiques
                  </div>
                </div>
              </div>
            </div>
          </div>
}