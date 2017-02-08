require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ShukiCreator from './ShukiCreator/ShukiCreator.container';
import ShukiViewerContainer from './ShukiViewer/ShukiViewer.container';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <ShukiCreator />
        <ShukiViewerContainer />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
