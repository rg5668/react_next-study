import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  //case1방식과 2방식이 있음
  //<Link href={`/clients/${clients.id}`}>{clients.name}</Link>
  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map((clients) => (
          <li key={clients.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: clients.id } }}
            >
              {clients.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
