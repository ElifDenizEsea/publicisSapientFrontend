import React, { Component } from 'react';
import Cards from './components/cards';
import AddCards from './components/addCards';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Credit Cards System
                    </h3>
      
              <AddCards />
        
              <table>
                <tr align="top">
                  <h4>Existing Cards
                    </h4>
                </tr>
                <tr>
                  <Cards cards={this.state.cards} />
                </tr>
              </table>
          
      </div >
    )
  }

  state = {
    cards: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/getAllCards', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    )
      .then(res => res.json())
      .then((data) => {
        this.setState({ cards: data.cards });
      })

      .catch(console.log)
  }
}

export default App;