import React, { Component } from 'react';
import { View, Text } from 'react-native';

class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          StatusScreen
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
export { StatusScreen };
