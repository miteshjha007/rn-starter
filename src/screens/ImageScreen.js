import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../components/imageDetails';

const ImageScreen = () => {
    return (<View>
        <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
    )
};
const styles = StyleSheet.create({


});

export default ImageScreen;