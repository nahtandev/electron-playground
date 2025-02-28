import "./style.scss";

export default function Home() {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>
        <div className="dashboard__actions">
          <button className="dashboard__button dashboard__button--secondary">
            Cette semaine ▾
          </button>
          <button className="dashboard__button dashboard__button--primary">
            Télécharger le rapport
          </button>
        </div>
      </header>

      <div className="dashboard__stats">
        <div className="stat-card">
          <div className="stat-card__content">
            <div className="stat-card__info">
              <p className="stat-card__label">Chiffre d'affaires</p>
              <p className="stat-card__value">45,231€</p>
            </div>
            <div className="stat-card__icon stat-card__icon--revenue">💰</div>
          </div>
          <div className="stat-card__footer">
            <span className="stat-card__trend stat-card__trend--up">+12.5%</span>
            <span className="stat-card__period">vs mois dernier</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__content">
            <div className="stat-card__info">
              <p className="stat-card__label">Clients actifs</p>
              <p className="stat-card__value">2,420</p>
            </div>
            <div className="stat-card__icon stat-card__icon--users">👥</div>
          </div>
          <div className="stat-card__footer">
            <span className="stat-card__trend stat-card__trend--up">+5.2%</span>
            <span className="stat-card__period">vs mois dernier</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__content">
            <div className="stat-card__info">
              <p className="stat-card__label">Commandes</p>
              <p className="stat-card__value">1,257</p>
            </div>
            <div className="stat-card__icon stat-card__icon--orders">📦</div>
          </div>
          <div className="stat-card__footer">
            <span className="stat-card__trend stat-card__trend--down">-3.1%</span>
            <span className="stat-card__period">vs mois dernier</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card__content">
            <div className="stat-card__info">
              <p className="stat-card__label">Taux de conversion</p>
              <p className="stat-card__value">4.5%</p>
            </div>
            <div className="stat-card__icon stat-card__icon--conversion">📈</div>
          </div>
          <div className="stat-card__footer">
            <span className="stat-card__trend stat-card__trend--up">+1.2%</span>
            <span className="stat-card__period">vs mois dernier</span>
          </div>
        </div>
      </div>

      <div className="dashboard__widgets">
        <div className="widget">
          <h2 className="widget__title">Dernières commandes</h2>
          <div className="widget__content">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="order-item">
                <div className="order-item__main">
                  <div className="order-item__number">#{i}</div>
                  <div className="order-item__details">
                    <p className="order-item__id">Commande #{1000 + i}</p>
                    <p className="order-item__time">Il y a {i} heure(s)</p>
                  </div>
                </div>
                <div className="order-item__status">
                  <p className="order-item__price">{i * 100}€</p>
                  <p className="order-item__state">Payée</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="widget">
          <h2 className="widget__title">Activité récente</h2>
          <div className="widget__content">
            {[
              { icon: "👤", action: "Nouveau client inscrit" },
              { icon: "📦", action: "Nouvelle commande reçue" },
              { icon: "💰", action: "Paiement reçu" },
              { icon: "📝", action: "Commentaire client ajouté" },
            ].map((item, i) => (
              <div key={i} className="activity-item">
                <div className="activity-item__icon">{item.icon}</div>
                <div className="activity-item__content">
                  <p className="activity-item__action">{item.action}</p>
                  <p className="activity-item__time">Il y a {i + 1} heure(s)</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Commandes</h2>
          <p className="text-3xl font-bold text-blue-600">125</p>
          <p className="text-gray-500">Total des commandes</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Clients</h2>
          <p className="text-3xl font-bold text-green-600">48</p>
          <p className="text-gray-500">Clients actifs</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Revenus</h2>
          <p className="text-3xl font-bold text-purple-600">15,890€</p>
          <p className="text-gray-500">Ce mois</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Activité récente</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="font-medium">Nouvelle commande #{i}</p>
                <p className="text-sm text-gray-500">Il y a {i} heure(s)</p>
              </div>
              <span className="text-blue-600">Voir détails</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
