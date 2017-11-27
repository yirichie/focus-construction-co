import React from 'react';
import clientList from '../clientList';

const Clients = () => {
    const renderList = () => {
        return clientList.map(({ type, data }) => {
            const clients = data.map(({ name }) => {
                return <div key={name}>{name}</div>;
            });
            return (
                <div key={type}>
                    <h5>{type}</h5>
                    {clients}
                </div>
            );
        });
    };
    return <div className="clients-section">{renderList()}</div>;
};

export default Clients;
