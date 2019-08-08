import React from 'react'
import { StatusBar, View } from "react-native";
import Navigation from './src/navigation';
import { Provider } from "react-redux";
import store from "./src/store";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <StatusBar barStyle={"dark-content"} />
          <Navigation />
      </Provider>
    )
  }
}

export default App;
