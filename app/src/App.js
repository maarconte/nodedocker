import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillMount() {
    this.getVisits()
  }

  getVisits = () => {
    axios.get(`http://localhost:3000/numbers`)
      .then(res => {
        /* this.setState({
          count: res.data.numbers
        }); */
        console.log(res);
      })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>
    Vous vous êtes connecté <strong>{this.state.count}</strong> fois.
        </p>
      </header>
    </div>
    )
  }
}

