import React from 'react';
import Chart from './Chart'

class App extends React.Component {

  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'root'
  }

  render() {
    return (
        <div>
          <Chart data={this.state.data} width={this.state.width} height={this.state.height}/>
        </div>
      );
    }
}

export default App;
