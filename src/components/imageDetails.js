import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const ImageDetails = ({imageSource,title,imageDetail}) =>{
    return <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        <Text>{imageDetail}</Text>
        </View>
}

const styles = StyleSheet.create({


});

export default ImageDetails;