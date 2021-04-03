import React from 'react';
import './index.less';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { updateMapToProps } from '../../store/actions';

@connect((state) => ({ classExample: state.classExample }), { updateMapToProps })
class ClassExample extends React.Component {
  static propTypes = {
    updateMapToProps: PropTypes.func,
    classExample: PropTypes.objectOf(PropTypes.any),
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.updateMapToProps('classExample', {
      words: 'goodbye world',
      newWords: 'remember back in the day',
    });
  }

  render() {
    const { classExample } = this.props;
    return (
      <div id="ClassExample">
        <div className="first">{classExample.words}</div>
        <div className="second">{classExample.newWords}</div>
        <Button onClick={this.handleClick}>redux更新</Button>
      </div>
    );
  }
}

export default ClassExample;
