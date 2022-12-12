import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    StyleSheet
} from 'react-native';
import {
    AlertSuccess
} from '../../assets'
import {
    SuccessButton
} from '../../Componets'

export default RegisterSuccessScreen = ({navigation}) =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <LinearGradient 
                colors={['#131B63', '#481162']}
                style={styles.container}>

                <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#131B63" />

                <View style={styles.content}>
                    <Image source={AlertSuccess} style={styles.imgAlert}/>
                    <Text style={styles.textHeader}>Your account succesfully</Text>
                    <Text style={styles.textHeader}>registerd</Text>
                    <Text style={[styles.textBody,{marginTop:20}]}>Click login button to continue, please</Text>
                    <Text style={styles.textBody}>enjouy your app</Text>
                </View>
                <SuccessButton onPress={()=>navigation.navigate('LoginScreen')} title='Continue Login' customeStyle={styles.btnSuccess}/>

            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:30,
        justifyContent:'center',
        alignContent:'center',
    },
    content:{
        alignItems:'center',
    },
    imgAlert:{
        marginBottom:120
    },
    textHeader:{
        fontFamily:'Lato-Bold',
        fontSize:24,
        color:'white',
    },
    textBody:{
        textAlign:'center',
        fontFamily:'Lato-Regular',
        fontSize:14,
        color:'white',
    },
    btnSuccess:{
        marginTop:40
    }
})