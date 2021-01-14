import React from 'react'

const Cards = (props) => {
  return (
    <table  className="ReactTable">
      <tr align="top">
        <td>     <h4 className="Check">Card Holder Name</h4></td>
        <td>     <h4 className="Check">Card Number</h4></td>
        <td>    <h4 className="Check">Balance</h4></td>
        <td>     <h4 className="Check">Card Limit</h4></td>
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


