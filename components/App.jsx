import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Profile from './Profile.jsx'

import ResultPage from './ResultPage.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Profile />
        <ResultPage />
      </div>
    );
  }
}

export default App;
