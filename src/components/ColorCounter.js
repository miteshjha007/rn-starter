import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorCounter = ({color , onIncrease,onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        <Button onPress={()=>onIncrease()} title={`Increase ${color}`} />
        <Button onPress={()=>onDecrease()} title={`Decrease ${color}`} />
        
        {/* <View>
            <View style={{ height: 100, width: 100, backgroundColor: 'rgb(0,255,0)' }} />
        </View> */}
    </View>
}

const style = StyleSheet.create({

});

export default ColorCounter;