import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'

export default function Flex({
    parent, style, children,
    horizontal, vertical,
    spacebetween, spacearound, center, 
    alignItems, alignContent, alignSelf,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
    paddingVertical, paddingHorizontal, paddingStart, 
    paddingEnd, padding,
    marginTop, marginBottom, marginLeft, marginRight,
    marginVertical, marginHorizontal, marginStart,
    marginEnd, margin,
    justifyContent,
    log //change background to red
}) {

    return (
        <View style={[
            horizontal ? styles.horizontal : '',
            vertical ? styles.vertical : '',
            spacebetween ? styles.spaceBetween : '',
            spacearound ? styles.spaceAround : '',
            center ? styles.justifyCenter : '', 
            alignItems ? {alignItems: alignItems} : '',
            alignContent ? {alignContent: alignContent} : '',
            alignSelf ? {alignSelf: alignSelf} : '',
            justifyContent ? {justifyContent: justifyContent} : '',
            parent ? {flex: 0} : styles.flex,
            style,
            paddingTop ? {paddingTop: paddingTop} : '',
            paddingBottom ? {paddingBottom: paddingBottom} : '',
            paddingLeft ? {paddingLeft: paddingLeft} : '',
            paddingRight ? {paddingRight: paddingRight} : '',
            paddingVertical ? {paddingVertical: paddingVertical} : '',
            paddingHorizontal ? {paddingHorizontal: paddingHorizontal} : '',
            paddingStart ? {paddingStart: paddingStart} : '',
            paddingEnd ? {paddingEnd: paddingEnd} : '',
            padding ? {padding: padding} : '',

            marginTop ? {marginTop: marginTop} : '',
            marginBottom ? {marginBottom: marginBottom} : '',
            marginLeft ? {marginLeft: marginLeft} : '',
            marginRight ? {marginRight: marginRight} : '',
            marginVertical ? {marginVertical: marginVertical} : '',
            marginHorizontal ? {marginHorizontal: marginHorizontal} : '',
            marginStart ? {marginStart: marginStart} : '',
            marginEnd ? {marginEnd: marginEnd} : '',
            margin ? {margin: margin} : '',

            log ? {backgroundColor: 'red'} : '',


            ]}>
            {children}
        </View>
    )


    
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: '#0f0fff'
    },  
    flex: {
        flex: 1,
    },
    horizontal: {
        flexDirection: 'row'
    },
    vertical: {
        flexDirection: 'column'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    spaceAround: {
        justifyContent: 'space-around'
    },
    justifyCenter: {
        justifyContent: 'center'
    }
})