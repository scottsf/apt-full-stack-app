import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Step3 from './Step3.js';

class Wizard extends Component {
  render() {
    return (
      <div>
        Wizard
        <Link to="/">
          <button> Cancel </button>
        </Link>
        <div>
          <Route path="/wizard/step1" component={Step1} />
          <Route path="/wizard/step2" component={Step2} />
          <Route path="/wizard/step3" component={Step3} />
        </div>
      </div>
    );
  }
}

export default Wizard;
