import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../components/imageDetails';

const ImageScreen = () => {
    return (<View>
        <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} imageDetail="Score 10"/>
        <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} imageDetail="Score 11"/>
        <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageDetail="Score 12"/>
    </View>
    )
};
const styles = StyleSheet.create({


});

export default ImageScreen;