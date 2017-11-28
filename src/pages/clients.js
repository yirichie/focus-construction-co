import React from 'react';
import clientList from '../clientList';

const Clients = () => {
    const renderList = () => {
        return clientList.map(({ type, data }) => {
            const clients = data.map(({ name }) => {
                return <li key={name}>{name}</li>;
            });
            return (
                <div className="clients-column" key={type}>
                    <h5>{type}</h5>
                    <ul>{clients}</ul>
                </div>
            );
        });
    };
    return <div className="clients-section">{renderList()}</div>;
};

export default Clients;
