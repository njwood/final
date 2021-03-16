import React from 'react';
import Chart from './Chart'
import TitleBlock from './TitleBlock'

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
          <TitleBlock />
          <Chart data={this.state.data} width={this.state.width} height={this.state.height} style={{display: 'flex', alignItems: 'center', marginLeft: 500}}/>
        </div>
      );
    }
}

export default App;
