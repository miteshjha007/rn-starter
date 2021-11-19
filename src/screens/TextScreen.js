import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return <View>
        <TextInput
            style={style.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        <Text>{password}</Text>
        {password.length < 5 ? <Text style={style.inputValidation}>Must be of 5 character</Text> : null}
    </View>
}

const style = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    inputValidation:{
        color:'red'
    }
});

export default TextScreen;