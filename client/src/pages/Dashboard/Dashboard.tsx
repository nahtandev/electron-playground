import "./Dashboard.scss";

const Dashboard = () => {
  const recentOrders = [
    { id: 1, customer: "Jean Dupont", amount: 156.50, status: "completed", date: "2025-03-04" },
    { id: 2, customer: "Marie Martin", amount: 89.99, status: "pending", date: "2025-03-04" },
    { id: 3, customer: "Pierre Durant", amount: 245.00, status: "processing", date: "2025-03-03" },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Dashboard</h1>
        <div className="dashboard__date">5 Mars 2025</div>
      </div>

      <div className="dashboard__stats">
        <div className="dashboard__stat-card">
          <div className="dashboard__stat-icon">
            €
          </div>
          <div className="dashboard__stat-content">
            <h3 className="dashboard__stat-title">Chiffre d'affaires</h3>
            <div className="dashboard__stat-value">45,231€</div>
            <div className="dashboard__stat-trend dashboard__stat-trend--up">
              +12.5% vs mois dernier
            </div>
          </div>
        </div>

        <div className="dashboard__stat-card">
          <div className="dashboard__stat-icon">
            🛒
          </div>
          <div className="dashboard__stat-content">
            <h3 className="dashboard__stat-title">Commandes</h3>
            <div className="dashboard__stat-value">127</div>
            <div className="dashboard__stat-trend dashboard__stat-trend--up">
              +8.2% vs mois dernier
            </div>
          </div>
        </div>

        <div className="dashboard__stat-card">
          <div className="dashboard__stat-icon">
            👥
          </div>
          <div className="dashboard__stat-content">
            <h3 className="dashboard__stat-title">Clients</h3>
            <div className="dashboard__stat-value">1,893</div>
            <div className="dashboard__stat-trend dashboard__stat-trend--up">
              +15.3% vs mois dernier
            </div>
          </div>
        </div>

        <div className="dashboard__stat-card">
          <div className="dashboard__stat-icon">
            📈
          </div>
          <div className="dashboard__stat-content">
            <h3 className="dashboard__stat-title">Taux de conversion</h3>
            <div className="dashboard__stat-value">3.2%</div>
            <div className="dashboard__stat-trend dashboard__stat-trend--down">
              -0.8% vs mois dernier
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard__sections">
        <section className="dashboard__section">
          <h2 className="dashboard__section-title">Dernières commandes</h2>
          <div className="dashboard__orders">
            <table className="dashboard__table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Montant</th>
                  <th>Statut</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.customer}</td>
                    <td>{order.amount.toFixed(2)}€</td>
                    <td>
                      <span className={`dashboard__status dashboard__status--${order.status}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="dashboard__section">
          <h2 className="dashboard__section-title">Activité récente</h2>
          <div className="dashboard__activity">
            <div className="dashboard__activity-item">
              <div className="dashboard__activity-icon dashboard__activity-icon--success">✓</div>
              <div className="dashboard__activity-content">
                <div className="dashboard__activity-title">Nouvelle commande #12458</div>
                <div className="dashboard__activity-meta">Il y a 5 minutes</div>
              </div>
            </div>
            <div className="dashboard__activity-item">
              <div className="dashboard__activity-icon dashboard__activity-icon--info">ℹ</div>
              <div className="dashboard__activity-content">
                <div className="dashboard__activity-title">Nouveau client inscrit</div>
                <div className="dashboard__activity-meta">Il y a 15 minutes</div>
              </div>
            </div>
            <div className="dashboard__activity-item">
              <div className="dashboard__activity-icon dashboard__activity-icon--warning">⚠</div>
              <div className="dashboard__activity-content">
                <div className="dashboard__activity-title">Stock faible pour Produit XYZ</div>
                <div className="dashboard__activity-meta">Il y a 30 minutes</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
