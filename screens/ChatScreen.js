import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';

class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          ChatScreen
        </Text>
        <Button
          title='Status'
          onPress={() => this.props.navigator.push(
            {
              screen: 'example.Status',
              title: 'Status'
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
export { ChatScreen };
