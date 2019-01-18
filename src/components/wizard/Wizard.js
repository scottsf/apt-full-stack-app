import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Step3 from './Step3.js';
import {connect} from 'react-redux';
import {clearState} from '../../ducks/reducer';
import './wizard.scss';

class Wizard extends Component {
  render() {
    return (
      <div className="wizard">
        <div className="wizard_nav">
          <h2> Add New List </h2>
          <Link to="/">
            <button onClick={() => this.props.clearState()}> Cancel </button>
          </Link>
        </div>
        <div className="wizard_steps">
          <Route path="/wizard/step1" component={Step1} />
          <Route path="/wizard/step2" component={Step2} />
          <Route path="/wizard/step3" component={Step3} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {clearState},
)(Wizard);
