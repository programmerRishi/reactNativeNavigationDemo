import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager, } from 'react-native';
import { connect } from 'react-redux';

// Command below is used for LayoutAnimation support in Android
  UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);

class SideBar extends Component {
  componentWillUpdate() {
      // console.log(LayoutAnimation);// see the Presets property
      LayoutAnimation.configureNext(
        {
          duration: 150,
          create: { type: 'linear', property: 'opacity' },
          update: { type: 'linear' }
        }
      );
  }

  renderElements = () => {
    console.log(this.props);
    const { navigation } = this.props;
    const data = [
          { key: 0, text: 'New Group', onPress: () => { navigation.navigate('group'); } },
          { key: 1, text: 'New broadcast', onPress: () => { navigation.navigate('broadcast'); } },
          { key: 2, text: 'Whatsapp Web', onPress: () => { navigation.navigate('web'); } },
          { key: 3, text: 'Starred Messages', onPress: () => { navigation.navigate('starred'); } },
          { key: 4, text: 'Settings', onPress: () => { navigation.navigate('settings'); } }
    ];
    return data.map(obj => {
        return (
          <TouchableOpacity activeOpacity={0.3} key={obj.key} onPress={obj.onPress}>
              <Text style={styles.textStyle}>{obj.text}</Text>
          </TouchableOpacity>
        );
      }
    );
  }

  render() {
    const showSideBarStyle = { right: 10, top: 0 };
    if (true) {
      return (
        <View style={[styles.sideBarStyle, showSideBarStyle]}>
          {this.renderElements()}
        </View>
      );
    }
    return (
      <View style={styles.sideBarStyle}>
        {this.renderElements()}
      </View>
    );
  }
}

const styles = {
    sideBarStyle: {
        justifyContent: 'space-around',
        position: 'absolute',
        backgroundColor: '#fff',
        right: -190,
        top: -210,
        height: 210,
        width: 180,
        borderWidth: 2,
        borderColor: '#fff',
        elevation: 5,
        paddingLeft: 15
    },
    textStyle: {
      color: '#000',
      fontSize: 16,
    }
};

const mapStateToProps = ({ sideBarReducer, navigationPropReducer }) => {
  const { showSideBar } = sideBarReducer;
  const { navigation } = navigationPropReducer;
  return { showSideBar, navigation };
};

export default connect(mapStateToProps)(SideBar);
