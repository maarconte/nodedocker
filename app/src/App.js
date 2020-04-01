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
    axios.get(`http://localhost:3000/`)
      .then(res => {
         this.setState({
          count: res.data.count
        });
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div className="App-desc">
        <h1>TP2: Multi-conteneurs</h1>
        <p>Mettre à disposition un fichier docker-compose qui permet de lancer un serveur web node avec une BDD Redis qui compte chaque connexion.</p>
        </div>
        <h2>Connexions</h2>
        <span className="App-counter">{this.state.count}</span>
      </header>
    </div>
    )
  }
}

