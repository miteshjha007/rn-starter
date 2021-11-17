import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1',age:21, key: '1' },
        { name: 'Friend 2',age:22, key: '2' },
        { name: 'Friend 3',age:23, key: '3' },
        { name: 'Friend 4',age:24, key: '4' },
        { name: 'Friend 5',age:25, key: '5' },
        { name: 'Friend 6',age:26, key: '6' },
        { name: 'Friend 7',age:27, key: '7' },
        { name: 'Friend 8',age:28, key: '8' },
        { name: 'Friend 9',age:29, key: '9' }
    ];
    return (
        <FlatList
       // keyExtractor={friends => friends.name} //here friends.name works as a key because all the name has unique value
            data={friends}
            renderItem={({ item }) => {                //iterate through each element 
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }} />
    )
};

const styles = StyleSheet.create({
textStyle:{
    marginVertical:50
}

});

export default ListScreen