import Link from 'next/link'
import React from 'react'

export default function ClientsPage() {
    const clients = [
        {id: 1, name: "Kenaz"},
        {id: 2, name: "Jose"}
    ];


    return (
        <div>
            <h1>Client Page</h1>
            <ul>
                {
                    clients.map(client => <li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    )
}
