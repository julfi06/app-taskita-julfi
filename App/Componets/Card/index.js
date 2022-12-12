import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const MiniCard = (props)=>{
    const cardBg = props.isActive ? 'white':'#5D1893';
    const fontColor = props.isActive ? '#2846A9':'#A5A7AF';
    const tgl = (props.date < 10 ) ? "0"+props.date : props.date
    return(
        <TouchableOpacity 
            onPress={props.onPress}
            style={[style.container, { backgroundColor:cardBg}]}>
            <Text style={[style.fontDay,{color:fontColor}]}>{props.day}</Text>
            <Text style={[style.textDate,{color:fontColor}]}>{tgl}</Text>
        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        width:100,
        height:120,
    },
    fontDay:{
        textAlign:'center',
        fontWeight:'bold',
        marginTop:10,
    },
    textDate:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:60,
    }
})