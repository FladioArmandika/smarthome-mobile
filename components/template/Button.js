import React from 'react'
import ReactNative from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors'
import Text from '../Text';

export default function Button({
    children, style, nav, light, dark,
    primary, secondary, 
    margin, marginTop,
    onPress
}) {
    return (
        <TouchableOpacity 
            onPress={() => nav.navigate(onPress)}
            style={[
                styles.button,
                primary ? styles.primary : '',
                marginTop ? {marginTop: marginTop} : '',
            ]}>
            {
                light ? 
                <Text>{children}</Text>
                :
                <Text white>{children}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = ReactNative.StyleSheet.create({
    button: {
        borderRadius: 10,
        backgroundColor: '#3498db',
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center', 
        alignItems:'center',
        padding: 15
    },
    primary: {
        backgroundColor: Colors.primary,
    }
})

