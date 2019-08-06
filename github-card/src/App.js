import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(){
    this.fetchFollowers();
  }

  fetchData = () => {
    fetch("https://api.github.com/users/coryhedeen")
    .then(res => {
      return res.json();
    })
    .then(res => this.setState({
      user: res
    }))
    .catch(err => console.log(err))
  }

  fetchFollowers = () => {
    fetch("https://api.github.com/users/coryhedeen/followers")
    .then(res => {
      return res.json();
    })
    .then(res => this.setState({
      followers: res
    }))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <Card card={this.state.user} />
        {this.state.followers.map(item => <Card card={item} />)}
      </div>
    );
  }
}

export default App;
