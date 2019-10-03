import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Camera from './src/Screens/Camerapage'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cameraOpen: false
    }
  }
  render() {
    return (
      this.state.cameraOpen ?
        <Camera />
        :
        <View style = {styles.container}>
          <Button style={{ width: '30px'}}
            title='Open camera'
            onPress={() => this.setState({
              cameraOpen: true
            })}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
