import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Settings
        </Text>
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
export { SettingsScreen };
