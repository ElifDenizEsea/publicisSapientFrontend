import React, { Component } from 'react';
import Cards from './components/cards';
import AddCards from './components/addCards';

class App extends Component {
  render() {
    return (
      <div>
        <AddCards/>
        <button onClick={(e) => this.getData(e)}>
          Get all
        </button>
        <Cards cards={this.state.cards} />
      </div>
    )
  }

  state = {
    cards: []
  };

   getData (event){
    event.preventDefault();
    fetch('http://localhost:8080/api/getAllCards', {
			method: 'GET'	,
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}}
	)
      .then(res =>res.json())
      .then((data) => {
        this.setState({ cards: data.cards })
      })
      .catch(console.log)
  }
}

export default App;