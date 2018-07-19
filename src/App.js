import React, { Component } from "react";
import NavBar from "../src/components/navbar";
import "./App.css";
import Counters from "../src/components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 4 },
      { id: 3, value: 5 },
      { id: 4, value: 6 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    // update the state using a method inherited from Component
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
