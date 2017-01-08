import React, {Component} from 'react'
import config from './config.json';

class Module extends Component{
  render() {
    return (
      <div>
        {config.module}
      </div>
    );
  }
}

export default Module
