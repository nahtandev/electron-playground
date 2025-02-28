import './style.scss';

export default function CommandesPage() {
  return (
    <div className="orders">
      <header className="orders__header">
        <h1 className="orders__title">Commandes</h1>
        <div className="orders__actions">
          <div className="orders__search">
            <input 
              type="text" 
              className="orders__search-input" 
              placeholder="Rechercher une commande..."
            />
          </div>
          <button className="orders__add-button">
            Nouvelle commande
          </button>
        </div>
      </header>

      <div className="orders__table-container">
        <table className="orders__table">
          <thead className="orders__table-head">
            <tr>
              <th className="orders__th">Commande</th>
              <th className="orders__th">Date</th>
              <th className="orders__th">Client</th>
              <th className="orders__th">Total</th>
              <th className="orders__th">Statut</th>
              <th className="orders__th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="orders__tr">
                <td className="orders__td">
                  <span className="orders__order-number">#{1000 + i}</span>
                </td>
                <td className="orders__td">
                  <span className="orders__date">28 Fév 2025</span>
                </td>
                <td className="orders__td">
                  <div className="orders__client">
                    <div className="orders__client-avatar">C{i}</div>
                    <span className="orders__client-name">Client {i}</span>
                  </div>
                </td>
                <td className="orders__td">
                  <span className="orders__amount">{i * 100}€</span>
                </td>
                <td className="orders__td">
                  <span className="orders__status orders__status--completed">
                    Complétée
                  </span>
                </td>
                <td className="orders__td">
                  <div className="orders__actions-cell">
                    <button className="orders__action-button orders__action-button--view">
                      👁️
                    </button>
                    <button className="orders__action-button orders__action-button--edit">
                      ✏️
                    </button>
                    <button className="orders__action-button orders__action-button--delete">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="orders__pagination">
        <button className="orders__pagination-button orders__pagination-button--prev">
          Précédent
        </button>
        <div className="orders__pagination-pages">
          <button className="orders__pagination-number orders__pagination-number--active">
            1
          </button>
          <button className="orders__pagination-number">2</button>
          <button className="orders__pagination-number">3</button>
        </div>
        <button className="orders__pagination-button orders__pagination-button--next">
          Suivant
        </button>
      </div>
    </div>
  );
}
