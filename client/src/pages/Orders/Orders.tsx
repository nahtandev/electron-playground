import { useEffect, useState } from "react";
import Table, { Column } from "../../components/Table/Table";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Orders.scss";

interface Order {
  id: string;
  date: string;
  client: string;
  total: string;
  status: "Complétée" | "En cours" | "Annulée";
}

const mockOrders: Order[] = [
  {
    id: "#1001",
    date: "28 fév 2025",
    client: "Client 1",
    total: "100€",
    status: "Complétée",
  },
  {
    id: "#1002",
    date: "28 fév 2025",
    client: "Client 2",
    total: "200€",
    status: "Complétée",
  },
  {
    id: "#1003",
    date: "28 fév 2025",
    client: "Client 3",
    total: "300€",
    status: "Complétée",
  },
  {
    id: "#1004",
    date: "28 fév 2025",
    client: "Client 4",
    total: "400€",
    status: "Complétée",
  },
  {
    id: "#1005",
    date: "28 fév 2025",
    client: "Client 5",
    total: "500€",
    status: "Complétée",
  },
];

const handleAddOrder = async () => {
  try {
    await fetch("http://localhost:7170/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "New Order" }),
    });
  } catch (error) {
    console.error(error);
  }
};

const fetchOrders = async () => {
  try {
    fetch(`http://localhost:${7170}/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => console.log(data));
  } catch (error) {
    console.error(error);
  }
};

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    fetchOrders();
  }, []);

  const columns: Column<Order>[] = [
    { header: "COMMANDE", key: "id" },
    { header: "DATE", key: "date" },
    { header: "CLIENT", key: "client" },
    { header: "TOTAL", key: "total" },
    {
      header: "STATUT",
      key: "status",
      render: (value) => (
        <span
          className={`orders__status orders__status--${value
            .toString()
            .toLowerCase()}`}
        >
          {value}
        </span>
      ),
    },
    {
      header: "ACTIONS",
      key: "id",
      render: (value) => (
        <div className="orders__actions">
          <button type="button" className="orders__action-btn" title="Voir">
            👁️
          </button>
          <button type="button" className="orders__action-btn" title="Éditer">
            ✏️
          </button>
          <button
            type="button"
            className="orders__action-btn"
            title="Supprimer"
          >
            🗑️
          </button>
        </div>
      ),
    },
  ];

  const filteredOrders = mockOrders.filter((order) =>
    Object.values(order).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  return (
    <div className="orders">
      <div className="orders__header">
        <h1 className="orders__title">Commandes</h1>
        <button
          onClick={handleAddOrder}
          type="button"
          className="orders__add-btn"
        >
          Ajouter une commande
        </button>
      </div>

      <div className="orders__toolbar">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Rechercher une commande..."
          className="orders__search"
        />
      </div>

      <Table
        columns={columns}
        data={paginatedOrders}
        className="orders__table"
      />

      {totalPages > 1 && (
        <div className="orders__pagination">
          <button
            type="button"
            className="orders__pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <span className="orders__pagination-info">
            Page {currentPage} sur {totalPages}
          </span>
          <button
            type="button"
            className="orders__pagination-btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
