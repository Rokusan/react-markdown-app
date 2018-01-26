import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
// import {Form, FormControl, Button} from 'react-bootstrap';
// import $ from 'jquery';
// https://github.com/chjj/marked

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markup: `\nWelcome !\n===
            \nA little paragraph here for our Markdown test ✈︎ ♨︎ ✄ ▼ ✈︎ ♨︎ ✄ ▼ ✈︎ ♨︎ ✄ ▼ 
            \n---
            \nHere text attributes *italic*, **bold**, ~~strikethrough~~
            \n---
            \n* Coffee\n* Juice\n* Tea
            \nNew \`drinks\` could be added\n(otherwise, search for example : cocktails  *[here](https://www.thespruce.com/classic-cocktails-you-must-try-759886)*)`
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({markup: e.target.value});
    }

    getMarkup(val) {
        let getMarkup = marked(val, {sanitize: true});
        return {__html: getMarkup};
    }

    onClick(evt) {
      evt.preventDefault(); 
    }

    render() {
        return (
          <div className="row">
            <div className="col-sm-6">
                <Input markup={this.state.markup} handleChange={this.handleChange} />
            </div>
            <div className="col-sm-6">
                <div id="output" dangerouslySetInnerHTML={this.getMarkup(this.state.markup)}>
                </div>
                <button onClick={this.onClick.bind(this)}>Add</button>
            </div>
          </div>
        );
    }
}

class Input extends Component {
    render() {
        return (
            <textarea
            rows="25"
            className="form-control"
            onChange={this.props.handleChange}>
            {this.props.markup}
            </textarea>
        );
    }
}


export default App;