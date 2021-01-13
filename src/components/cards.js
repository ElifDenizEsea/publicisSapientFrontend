import React from 'react'



const Cards = ( props ) => {
  return (
    <div>
      {props.cards.length>0 && props.cards.map((card) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-name">{card.name}</h5>
            <h5 class="card-number">{card.number}</h5>
            <h5 class="card-balance">{card.balance}</h5>
            <h5 class="card-limit">{card.cardLimit}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Cards


