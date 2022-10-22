import { useRouter } from 'next/router';
import React from 'react';


export default function ClientsProjectsPage() {
    
    const router = useRouter();
    function loadProjectHandler(){
        //load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid:'projectA'}
        });

    }
    return (
        <div>
            <h1>Clients Projects Page</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}
