import React from 'react'
import ReactNative from "react-native";
import { normalize } from '../../helpers/normalize';
import Colors from '../../constants/Colors';

export default function Text({
        children, secondary,
        small, medium, large, xlarge, jumbo, 
        white, bold, style, center, left, right,
        colorPrimary,
        colorDanger, colorWarning, colorSuccess,
        alignItems, alignContent, alignSelf,
        paddingTop, paddingBottom, paddingLeft, paddingRight,
        paddingVertical, paddingHorizontal, paddingStart, 
        paddingEnd, padding,
        marginTop, marginBottom, marginLeft, marginRight,
        marginVertical, marginHorizontal, marginStart,
        marginEnd, margin,
    }) {
    return (
        <ReactNative.Text style={[
                // {fontFamily:'gotham-medium'}, 
                {color: Colors.primaryText},
                style, 
                center ? {textAlign: "center"} : '',
                left ? {textAlign: "left"} : '',
                right ? {textAlign: "right"} : '',
                bold ? styles.bold : '', 
                white ? styles.white: '',
                secondary ? {color: Colors.secondaryText} : '',
                colorPrimary ? {color: Colors.primary} : '',
                colorDanger ? {color: Colors.danger} : '',
                colorWarning ? {color: Colors.warning} : '',
                colorSuccess ? {color: Colors.success} : '',
                jumbo ? {fontSize: normalize(24)} : '',
                xlarge ? {fontSize: normalize(20)} : '',
                large ? {fontSize: normalize(16)} : '',
                medium ? {fontSize: normalize(12)} : '',
                small ? {fontSize: normalize(10)} : '',
                alignItems ? {alignItems: alignItems} : '',
                alignSelf ? {alignSelf: alignSelf} : '',
                alignContent ? {alignContent: alignContent} : '',

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
            ]}>
            {children}
        </ReactNative.Text>
    )
}


const styles = ReactNative.StyleSheet.create({
    bold: {
        fontWeight: 'bold',
        // color: '#ff00ff'
    },
    white: {
        color: '#ffffff'
    },
    primary: {
        color: '#e77f67',
    }
})
