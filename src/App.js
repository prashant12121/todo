import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './Plan.js';


class App extends Component {

  state = {
    items: [],
    text: ""
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" })
    }
  }

  handleDelete = (id) => {
    console.log("delete", id);
    const oldItems = [...this.state.items];
    const items = oldItems.filter((e, i) => {
      return i != id;
    })
    this.setState({ items: items });
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg">
            <h2 className="text-center">Todays plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" onChange={this.handleChange} placeholder="write your name here" value={this.state.text} />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
