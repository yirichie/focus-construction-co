import React, { Component } from 'react';

class Clients extends Component {
    renderList = clients => {
        return clients.map(industry => {
            const clients = industry.data.map(client => {
                return <div key={client.name}>{client.name}</div>;
            });
            return (
                <div>
                    <h2>{industry.type}</h2>
                    {clients}
                </div>
            );
        });
    };
    render() {
        const clients = [
            {
                type: 'Retail',
                data: [
                    {
                        name: 'Attic'
                    },
                    {
                        name: 'Bozzoro'
                    },
                    {
                        name: "Charlie's Fixture"
                    },
                    {
                        name: 'Hana Sports'
                    },
                    {
                        name: 'Mega Shoes'
                    },
                    {
                        name: 'Notebook Shop'
                    },
                    {
                        name: 'Papaya Clothing'
                    },
                    {
                        name: 'Q-Bargain'
                    },
                    {
                        name: 'Restaurant World'
                    },
                    {
                        name: 'Samsung Fixture'
                    },
                    {
                        name: 'You & Me'
                    }
                ]
            },
            {
                type: 'Bakery',
                data: [
                    {
                        name: 'Paris Baguette'
                    },
                    {
                        name: 'Red Ribbon'
                    },
                    {
                        name: 'Tous Les Jours'
                    },
                    {
                        name: "Valerio's Tropical Bakeshop"
                    }
                ]
            },
            {
                type: 'Market',
                data: [
                    {
                        name: 'Arko Food Market'
                    },
                    {
                        name: 'Bestway Market'
                    },
                    {
                        name: 'Family Farm Market'
                    },
                    {
                        name: 'Gardena Super Market'
                    },
                    {
                        name: 'H-Mart'
                    },
                    {
                        name: 'La Bodega Market'
                    },
                    {
                        name: 'Seafood Ranch & Market'
                    },
                    {
                        name: 'Smart Nutrition'
                    },
                    {
                        name: 'Seafood Ranch Super Market'
                    }
                ]
            },
            {
                type: 'Restaurant',
                data: [
                    {
                        name: 'Aria Restaurant'
                    },
                    {
                        name: 'Aroma Food Court'
                    },
                    {
                        name: 'BBGO'
                    },
                    {
                        name: 'Chinese Buffet'
                    },
                    {
                        name: 'Chowking'
                    },
                    {
                        name: 'CJ Food Court'
                    },
                    {
                        name: 'Dong Chun Hong'
                    },
                    {
                        name: 'French Crepe'
                    },
                    {
                        name: 'Grill City'
                    },
                    {
                        name: 'Jollibee'
                    },
                    {
                        name: 'Kiku Sushi'
                    },
                    {
                        name: 'Kyochon'
                    },
                    {
                        name: "Mike and Anne's"
                    },
                    {
                        name: 'Momoya Sushi'
                    },
                    {
                        name: 'Musashi West'
                    },
                    {
                        name: "Quizno's Sub"
                    },
                    {
                        name: 'That Pizza Place'
                    },
                    {
                        name: 'Tilted Kilt Pub & Eatery'
                    }
                ]
            },
            {
                type: 'Cafe & Bar',
                data: [
                    {
                        name: 'Boba Loca'
                    },
                    {
                        name: 'Brington Coffee Shop'
                    },
                    {
                        name: "Camille's Sidewalk Café"
                    },
                    {
                        name: 'Mermaid Tavern'
                    },
                    {
                        name: 'Midday Café'
                    }
                ]
            },
            {
                type: 'Food Facility',
                data: [
                    {
                        name: 'CJ Omni Food'
                    },
                    {
                        name: 'Candy Factory'
                    },
                    {
                        name: 'Flavormine'
                    },
                    {
                        name: 'Fil-Am Food Trade'
                    },
                    {
                        name: "O's Tasty Food"
                    },
                    {
                        name: 'Philippine Food Trade'
                    },
                    {
                        name: 'Smart Nutrition'
                    }
                ]
            },
            {
                type: 'Beauty Shop',
                data: [
                    {
                        name: 'Amore'
                    },
                    {
                        name: 'Aroma Spa & Sauna'
                    },
                    {
                        name: 'Grace Cosmetic & Skin care'
                    },
                    {
                        name: 'Face Shop'
                    },
                    {
                        name: 'Natural Herb'
                    },
                    {
                        name: 'The H-Shop Care'
                    }
                ]
            },
            {
                type: 'Religious',
                data: [
                    {
                        name: 'Good Community Church'
                    },
                    {
                        name: 'The Church'
                    }
                ]
            },
            {
                type: 'Medical',
                data: [
                    {
                        name: 'Enhance Plastic Surgery'
                    },
                    {
                        name: 'Hyundai Dentistry'
                    },
                    {
                        name: 'New Life Clinic'
                    }
                ]
            }
        ];
        return (
            <div className="clients-section">{this.renderList(clients)}</div>
        );
    }
}

export default Clients;
