import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity, Touchable } from 'react-native';

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
const HomeScreen = ({navigation}) => {
  return <View>
  <Text style={styles.text}>Hi there! This is home screen</Text>
<Button
onPress={()=>navigation.navigate('Components')}
title="Go to Components Demo"/>
<Button style={styles.buttonStyle}
onPress={()=>navigation.navigate('List')}
title="Go to List Demo"/>
  </View>
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle:{
    marginTop:20
  }
});

export default HomeScreen;
