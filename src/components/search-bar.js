import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      isError: false
    };
    this.formOnSubmit = this.formOnSubmit.bind(this);
  }

  formOnSubmit(e) {
    e.preventDefault();
    const { data } = this.state;
    !data ? this.setState({isError: true}) : this.props.handleSubmit(data);
    this.setState({data: ''});
  }

  render() {
    const { data, isError } = this.state;
    return (
      <form onSubmit={this.formOnSubmit} className="search-form">
        <input className={isError ? "error" : "okay"} value={data} onChange={({target: {value}}) => this.setState({data: value, isError:false})} placeholder={isError?"Write something at least Dude":"What do you want to do?"}/>
        <button className="btn btn-submit" type="submit">+</button>
      </form>
    )
  }
}
