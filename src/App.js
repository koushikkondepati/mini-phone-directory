import "./App.css";
import React, {Component} from 'react';
import Header from "./Header";

class App extends Component{

  

  render(){
    let subscribers = [
      {
        id: 1,
        name: "koushik",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Ratan",
        phone: "9999999999"
      }
    ]
    return(
      <div>
        <Header />
        <div style={{margin:10}}>
          <button className='addButton'>ADD</button>
        
          <div>
            <span>Name</span>
            <span>Phone</span>
          </div>

          {
            subscribers.map( sub =>{
              return <div key={sub.id}>
              <span>{sub.name}</span>
              <span>{sub.phone}</span>
            </div>
            })
          }

        </div>
      </div>
    );
  }
}

export default App;
