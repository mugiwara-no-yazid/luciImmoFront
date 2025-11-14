import {devise} from "../../globalvar"
import {Link} from 'react-router-dom'
export default function Immo({id_bien,imgPrincipal,type_bien,ville,nb_pieces,surface,description,prix,note})
{
    
   return <div className="listing-card">
    
            <div className="listing-image" style={{backgroundImage: `url(${imgPrincipal})`}}>
                <div className="listing-badges">
                    <span className="badge type">{type_bien}</span>
                    <span className="badge premium"></span>
                </div>
                <div className="listing-actions">
                    <button className="action-btn">♡</button>
                    <Link to={`/bien/${id_bien}`}>
                    <button className="action-btn">👁</button>
                    </Link>
                </div>
            </div>
            <div className="listing-content">
                <div className="listing-title">
                    <span>{description}</span>
                    <div className="rating">⭐ {note} <span>(31)</span></div>
                </div>
                <div className="location">📍 {ville}</div>
                <div className="listing-details">
                    <div className="detail-item">🛏 {nb_pieces}</div>
                    <div className="detail-item">📐 {surface}m²</div>
                </div>
                <div className="listing-footer">
                    <div className="price">{prix}{devise}<span className="price-period">/mois</span></div>
                    <Link to={`/bien/${id_bien}`}>
                    <button className="view-btn">Voir détails</button>
                    </Link>
                </div>
            </div>
        
    </div>
}