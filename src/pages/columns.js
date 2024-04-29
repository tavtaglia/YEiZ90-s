export const columns = [
    {
      name: "Client",
      selector: row => row.name,
      cell: row => <td className="client-column">{row.name}</td>
    },
    {
      name: "Order ID",
      selector: row => row.id,
      cell: row => <td className="id-column">{row.id}</td>
    },
    {
      name: "Date",
      selector: row => row.date,
      cell: row => <td className="date-column" style={{ marginLeft: "-45px" }}>{row.date}</td>
    },
    {
      name: "Income",
      selector: row => row.income,
      cell: row => <td className="income-column">{row.income}</td>
    },
    {
      name: "Status",
      selector: row => row.status,
      cell: row => (
      <td className={`status-column status-${row.status.toLowerCase()}`}>
      {row.status} </td>
    )
    },
    {
      name: "", 
      selector: row => row.id, 
      cell: row => (
        <td className="details-column">
          <a href={`/order-details/${row.id}`}>View Details</a> {/* replace with your details page URL */}
        </td>
      ),
    },
  ];