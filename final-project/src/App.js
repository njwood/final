import React from 'react';
import Chart from './Chart'
import Bottom from './Bottom'
import NavBar from './NavBar'
import Introduction from './Introduction'

class App extends React.Component {

  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 500,
    height: 150,
    id: 'root'
  }

  render() {
    return (
        <div>
          <div id='Top' ref="Top">
            <NavBar />
            <Introduction />
          </div>
          <div id='Middle' ref="Middle" style={{marginBottom: '15%'}}> 
          </div>
          <div id='Bottom' style={{marginTop: '45%'}}>
            <Bottom /> 
          </div>
        </div>
      );
    }
}

export default App;
