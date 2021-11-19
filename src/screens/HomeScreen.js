import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable } from 'react-native';

// const HomeScreen = props => {
//   return <View>
//   <Text style={styles.text}>Hi there! This is home screen</Text>
// <Button
// onPress={()=>props.navigation.navigate('Components')}
// title="Go to Components Demo"/>
// <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
//   <Text>Go to List Demo</Text>
// </TouchableOpacity>
//   </View>
// };
const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Hi there! This is home screen</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo" />
    <Button style={styles.buttonStyle}
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo" />
    <Button style={styles.buttonStyle}
      onPress={() => navigation.navigate('Image')}
      title="Go to Detail Demo" />
    <Button style={styles.buttonStyle}
      onPress={() => navigation.navigate('Count')}
      title="Go to Count Demo" />
    <Button style={styles.buttonStyle}
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo" />
    <Button style={styles.buttonStyle}
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo" />
          <Button style={styles.buttonStyle}
      onPress={() => navigation.navigate('Text')}
      title="Go to Text Demo" />
  </View>
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle: {
    marginTop: 20
  }
});

export default HomeScreen;
