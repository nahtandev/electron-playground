import { useState } from "react";
import "./Customers.scss";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: "active" | "inactive";
  lastOrder: string;
  totalOrders: number;
}

const mockCustomers: Customer[] = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "06 12 34 56 78",
    company: "Tech Solutions",
    status: "active",
    lastOrder: "2025-03-01",
    totalOrders: 12
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie.martin@email.com",
    phone: "06 98 76 54 32",
    company: "Design Studio",
    status: "active",
    lastOrder: "2025-02-28",
    totalOrders: 8
  },
  {
    id: 3,
    name: "Pierre Durant",
    email: "pierre.durant@email.com",
    phone: "06 11 22 33 44",
    company: "Marketing Pro",
    status: "inactive",
    lastOrder: "2024-12-15",
    totalOrders: 3
  }
];

const Customers = () => {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="customers">
      <div className="customers__header">
        <h1 className="customers__title">Clients</h1>
        <button className="customers__add-btn">
          ➕ Nouveau Client
        </button>
      </div>

      <div className="customers__filters">
        <div className="customers__search">
          <input
            type="text"
            placeholder="Rechercher un client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="customers__search-input"
          />
        </div>

        <div className="customers__filter-status">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as "all" | "active" | "inactive")}
            className="customers__status-select"
          >
            <option value="all">Tous les statuts</option>
            <option value="active">Actifs</option>
            <option value="inactive">Inactifs</option>
          </select>
        </div>
      </div>

      <div className="customers__content">
        <table className="customers__table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Entreprise</th>
              <th>Statut</th>
              <th>Dernière commande</th>
              <th>Total commandes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td className="customers__name-cell">
                  <div className="customers__avatar">
                    {customer.name.charAt(0)}
                  </div>
                  {customer.name}
                </td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.company}</td>
                <td>
                  <span className={`customers__status customers__status--${customer.status}`}>
                    {customer.status === "active" ? "Actif" : "Inactif"}
                  </span>
                </td>
                <td>{customer.lastOrder}</td>
                <td>{customer.totalOrders}</td>
                <td>
                  <div className="customers__actions">
                    <button className="customers__action-btn" title="Éditer">
                      ✏️
                    </button>
                    <button className="customers__action-btn" title="Supprimer">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
