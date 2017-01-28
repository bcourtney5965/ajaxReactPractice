import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
  }
  ajaxTest() {
    console.log('hello');
    axios.post('/api/testAdd', {from: 'client'})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div onClick={this.ajaxTest}>hello world</div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('root'));