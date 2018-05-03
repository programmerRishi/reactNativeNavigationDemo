import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class CallsScreen extends Component {
  static navigatorStyle = {
    navBarHidden: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          CallsScreen
        </Text>
        <Button
          title='Settings'
          onPress={() => this.props.navigator.push(
            {
              screen: 'example.Settings',
              title: 'Settings'
            }
          )}
        />
      </View>
          );
        }
      }
const styles = {
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      };
export { CallsScreen };
