import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const Color_Increment = 15;
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            if (state.red + action.amount > 255 || state.red + action.amount < 0) {
                return state;
            } else {
                return { ...state, red: state.red + action.amount };
            }
        case 'green':
            if (state.green + action.amount > 255 || state.green + action.amount < 0) {
                return state;
            } else {
                return { ...state, green: state.green + action.amount };
            }
        case 'blue':
            if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
                return state;
            } else {
                return { ...state, blue: state.blue + action.amount };
            }
        default:
            return state;
    }
};
const SquareScreen = () => {
    const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    return (
        <View>
            <ColorCounter onIncrease={() => runMyReducer({ colorToChange: 'red', amount: Color_Increment })} onDecrease={() => runMyReducer({ colorToChange: 'red', amount: -1 * Color_Increment })} color="Red" />
            <ColorCounter onIncrease={() => runMyReducer({ colorToChange: 'blue', amount: Color_Increment })} onDecrease={() => runMyReducer({ colorToChange: 'blue', amount: -1 * Color_Increment })} color="Blue" />
            <ColorCounter onIncrease={() => runMyReducer({ colorToChange: 'green', amount: Color_Increment })} onDecrease={() => runMyReducer({ colorToChange: 'green', amount: -1 * Color_Increment })} color="Green" />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({

});

export default SquareScreen;