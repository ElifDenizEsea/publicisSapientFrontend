import React, { Component } from 'react';
import Cards from './components/cards';
import AddCards from './components/addCards';

class App extends Component {
  render() {
    return (
      <div>
        <table >
          <tr>
            <td>
              <AddCards /> </td>
            <td>
            </td>
            <td align="left">
              <table>
                <tr align="top">
                <h4>Get All Cards
                    </h4>
                  </tr>
                  <tr>
              <button className="Button"  onClick={(e) => this.getData(e)}>
                Get all
               </button>
               </tr>
               <tr>
              <Cards cards={this.state.cards} />
              </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    )
  }

  state = {
    cards: []
  };

  getData(event) {
    event.preventDefault();
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