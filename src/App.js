import React, { Component } from 'react';

import SearchBar from './components/search-bar';
import Items from './components/items'
import Footer from './components/footer'

import data from './data';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: data
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleSubmit(data) {
    let toDos = this.state.toDos;
    toDos = [{title: data, isDone: false}, ...toDos];
    this.setState({toDos});
  }

  handleDone(data) {
    let toDos = this.state.toDos;
    toDos = toDos.map(todo => todo === data ? (todo.isDone === true ? {title: todo.title, isDone:false} : {title: todo.title, isDone: true}) : todo);
    this.setState({toDos});
  }

  handleRemove(data) {
    let toDos = this.state.toDos;
    toDos = toDos.filter(todo => todo !== data);
    this.setState({toDos});
  }

  render() {
    return (
      <div>
        <header className="header-area">
          <img alt="logo" src={logo} />
          <h1>To Do With React JS</h1>
        </header>
        <div className="container">
          <SearchBar handleSubmit={this.handleSubmit}/>
          <Items items={this.state.toDos} handleDone={this.handleDone} handleRemove={this.handleRemove} />
        </div>
        <Footer />
      </div>
    );
  }
}
