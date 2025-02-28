import "./style.scss"

export default function ClientsPage() {
  return (
    <div className="clients">
      <header className="clients__header">
        <h1 className="clients__title">Clients</h1>
        <button className="clients__add-button">
          Ajouter un client
        </button>
      </header>

      <div className="clients__grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="client-card">
            <div className="client-card__header">
              <div className="client-card__avatar">
                <span className="client-card__initials">C{i}</span>
              </div>
              <div className="client-card__status client-card__status--active">
                Actif
              </div>
            </div>
            
            <div className="client-card__body">
              <h3 className="client-card__name">Client {i}</h3>
              <p className="client-card__email">client{i}@example.com</p>
              
              <div className="client-card__stats">
                <div className="client-card__stat">
                  <span className="client-card__stat-label">Commandes</span>
                  <span className="client-card__stat-value">{i * 5}</span>
                </div>
                <div className="client-card__stat">
                  <span className="client-card__stat-label">Total</span>
                  <span className="client-card__stat-value">{i * 100}€</span>
                </div>
              </div>
            </div>
            
            <div className="client-card__footer">
              <button className="client-card__button client-card__button--primary">
                Voir détails
              </button>
              <button className="client-card__button client-card__button--secondary">
                Contacter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
