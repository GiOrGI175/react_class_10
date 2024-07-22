import React, { useState, useEffect } from 'react';
import apiRequest from './apiRequest';
import Continer from './childer/continer';

const App = () => {
  //   const [loading, setLoading] = useState(false);

  //   const [pizza, setPizza] = useState([]);

  //   const [error, setEror] = useState('');

  //   const fethPizza = async () => {
  //     const url = 'http://localhost:3500/items';
  //     setLoading(true);
  //     const data = await apiRequest(url);
  //     setLoading(false);

  //     if (data.error) {
  //       setEror(data.error);
  //     } else {
  //       setPizza(data);
  //     }
  //   };

  //   const removePizza = async (id) => {
  //     const url = `http://localhost:3500/items/${id}`;

  //     const options = {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //     };

  //     const data = await apiRequest(url, options);

  //     if (data.error) {
  //       setEror(data.error);
  //     } else {
  //       setPizza((pervPizza) => pervPizza.filter((pizza) => pizza.id !== id));
  //     }
  //   };

  //   // PUT Request EDIT

  //   const editPizzaPrice = async (id, newPrice) => {
  //     const url = `http://localhost:3500/items/${id}`;

  //     const options = {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },

  //       body: JSON.stringify({ price: newPrice }),
  //     };

  //     const data = await apiRequest(url, options);
  //     if (data.error) {
  //       setEror(data.error);
  //     } else {
  //       // db.json
  //       setPizza((prevPizza) =>
  //         // array . map , id:2, name:Margherita
  //         prevPizza.map((pizza) =>
  //           //  2    === 2
  //           pizza.id === id ? { ...pizza, price: newPrice } : pizza
  //         )
  //       );
  //     }
  //   };
  //   useEffect(() => {
  //     fethPizza();
  //   }, []);

  return (
    <Continer />
    // <ul>
    //   {pizza.map((pizza) => {
    //     return (
    //       <li key={pizza.id}>
    //         <h1>{pizza.name}</h1>
    //         <p>Size: {pizza.size}</p>
    //         <p>Price: ${pizza.price}</p>
    //         <p>
    //           Ingredients:
    //           {pizza.ingredients
    //             ? pizza.ingredients.join(', ')
    //             : 'No ingredients listed'}
    //         </p>

    //         <button
    //           onClick={() => {
    //             editPizzaPrice(pizza.id, Number((pizza.price + 1).toFixed(2)));
    //           }}
    //         >
    //           +
    //         </button>

    //         <button onClick={() => removePizza(pizza.id)}>remove</button>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};

export default App;
