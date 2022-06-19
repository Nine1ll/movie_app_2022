import React from 'react';
class App extends React.Component {
  constructor(props){ //#1
    super(props);
    console.log('hello');
  }
  state = {
    count:0,
  };
  add = ()=>{
    this.setState(current => ({
      count : current.count+1,
    }));
  };
  minus = () => {
    this.setState(current => ({
      count : current.count-1,
    }));
  };
  componentDidMount(){ //#3
    console.log('component rendered');
  }
  render(){ //#2
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}> Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}
export default App;
