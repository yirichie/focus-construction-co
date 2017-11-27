import React from 'react';
import clientList from '../clientList';

const Clients = () => {
    const renderList = () => {
        return clientList.map(industry => {
            const clients = industry.data.map(client => {
                return <div key={client.name}>{client.name}</div>;
            });
            return (
                <div key={industry.type}>
                    <h5>{industry.type}</h5>
                    {clients}
                </div>
            );
        });
    };
    return <div className="clients-section">{renderList()}</div>;
};

export default Clients;
