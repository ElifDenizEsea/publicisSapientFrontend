import React from 'react'

const Cards = (props) => {
  return (
    <table  className="ReactTable">
      <tr className="CheckLabel" align="top">
        <td className="CheckLabel">     Name</td>
        <td className="CheckLabel">Card Number</td>
        <td className="CheckLabel">Balance</td>
        <td  className="CheckLabel">Limit</td>
      </tr>

      {props.cards.length > 0 && props.cards.map((card) => (
        <tr >
          <td><span class="card-name">{card.name}</span></td>
          <td> <span class="card-number">{card.number}</span></td>
          <td> <span class="card-balance">{card.balance}</span></td>
          <td> <span class="card-limit">{card.cardLimit}</span></td>
        </tr>
      ))}

    </table>
  )
};

export default Cards


