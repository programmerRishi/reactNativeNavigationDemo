import { Navigation } from 'react-native-navigation';
import { ChatScreen, StatusScreen, CallsScreen, SettingsScreen } from '../../screens';

const registerScreens = () => {
    Navigation.registerComponent('example.Chat', () => ChatScreen);
    Navigation.registerComponent('example.Status', () => StatusScreen);
    Navigation.registerComponent('example.Calls', () => CallsScreen);
    Navigation.registerComponent('example.Settings', () => SettingsScreen);
};
const Router = () => {
      registerScreens();
      Navigation.startTabBasedApp({
            tabs: [
              {
                label: 'Chats',
                screen: 'example.Chat',
                icon: require('../../assets/chat.png'),
                // selectedIcon: icons.home,
                title: 'Chats',
              },
              {
                label: 'Calls',
                screen: 'example.Calls',
                icon: require('../../assets/call.png'),
                // selectedIcon: icons.home,
                title: 'Calls',
              },
            ],
            appStyle: {
              tabBarHideShadow: false,
              tabBarButtonColor: '#000',
              tabBarHidden: false, // make the tab bar hidden
              tabBarTranslucent: true, // change the translucent of the tab bar to false
              tabBarTextFontFamily: 'Avenir-Medium',
              forceTitlesDisplay: false,
              tabBarSelectedLabelColor: '#551A8B'
            }
      });
};

export default Router;
