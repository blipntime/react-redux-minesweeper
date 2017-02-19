import React from 'react';

import VisibleGrid from './containers/VisibleGrid';

export default class App extends React.Component {
  render() {
    return (
      <div>
        Minesweeper
        <VisibleGrid/>
      </div>
    )
  }
}
