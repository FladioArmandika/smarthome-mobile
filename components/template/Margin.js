import React from 'react'
import { View } from 'react-native'

export default function Margin({
    children,
    top,bottom,left,right,
    vertical, horizontal,
    start, end, all
}) {
    return (
        <View
            style={[
                top ? {marginTop: top} : '',
                bottom ? {marginBottom: bottom} : '',
                left ? {marginLeft: left} : '',
                right ? {marginRight: right} : '',
                vertical ? {marginVertical: vertical} : '',
                horizontal ? {marginHorizontal: horizontal} : '',
                start ? {marginStart: start} : '',
                end ? {marginEnd: end} : '',
                all ? {margin: all} : '',
            ]}>
            {children}
        </View>
    )
}
