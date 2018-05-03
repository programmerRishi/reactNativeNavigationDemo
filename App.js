import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import Router from './src/components/Router';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const prepareIcons = async () => {
//   const icons = await Promise.all([
//     Icon.getImageSource('call', 26),
//     Icon.getImageSource('chat', 26),
//   ]);
//   const [ call, chat ] = icons;
//   return { home, homeOutline, person, personOutline };
// }

const App = () => {
  const store = createStore(reducers, {});
  return (
    <Provider store={store}>
      {Router()}
    </Provider>
  );
};

export default App;
