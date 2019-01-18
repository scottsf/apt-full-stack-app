import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAmount} from '../../ducks/reducer';
import axios from 'axios';


class Step3 extends Component {
  state = {
    monthlyMA: '',
    desiredMR: '',
  };

  componentDidMount() {
    this.setState({
      monthlyMA: this.props.monthlyMA,
      desiredMR: this.props.desiredMR,
    });
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


   createHouse = () => {
      axios.post(`/api/house`, this.props);

   };

  render() {
    return (
      <div>
        <input
          name="monthlyMA"
          value={this.state.monthlyMA}
          type="number"
          onChange={e => this.handleInput(e)}
        />
        <input
          name="desiredMR"
          type="number"
          onChange={e => this.handleInput(e)}
          value={this.state.desiredMR}
        />
        <Link to="/">
          <button onClick={() => this.createHouse()}> Complete </button>
        </Link>
        <button
          onClick={() => {
            this.props.history.goBack();
            this.props.updateAmount(this.state);
          }}>
          Previous Step
        </button>
      </div>
    );
  }
}

const mapPropsToState = state => ({...state});

export default connect(
  mapPropsToState,
  {updateAmount},
)(Step3);
