import *  as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {
    PrimaryButton
} from '../../Componets'

export default RegisterScreen = ({navigation})=>{
    const [name, onChangeName] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [isLoading, onChangeLoading] = React.useState(false);
    const onRegister=()=>{
        onChangeLoading(true)
        axios.post('https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/insertOne',{
            "dataSource": "Cluster0",
            "database": "app_taskita",
            "collection": "member",
            "document": {
              "name": name,
              "email":email,
              "password":password
            }
        },{
            headers:{
                'api-key': 'zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC'
            }
        }).then(res=>{
            navigation.navigate('RegisterSuccessScreen')
        }).catch(err=>{
            console.log(err)
            navigation.navigate('RegisterErrorScreen')
        }).finally(()=>{
            onChangeLoading(false)
        })
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
                colors={['#131B63', '#481162']}
                style={styles.container}>
                
                <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#131B63" />

                <Text style={styles.headerText}>Register</Text>
                <Text style={styles.BodyText}>Please input your valid data.</Text>

                <TextInput 
                    style={[styles.inputStyle, {marginTop:80}]} 
                    placeholder="Full Name"
                    onChangeText={onChangeName}
                    value={name}/>
                    
                <TextInput 
                    style={[styles.inputStyle]} 
                    placeholder="Email"
                    onChangeText={onChangeEmail}
                    value={email}/>

                <TextInput 
                    style={[styles.inputStyle]} 
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={onChangePassword}
                    value={password}/>
                
                <PrimaryButton 
                    customeStyle={styles.btnRegisterStyle} 
                    title="REGISTER"
                    isLoading={isLoading}
                    onPress={()=>onRegister()}/>

                <View style={styles.footherText}>
                    <Text style={styles.smallFootherText}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                        <Text style={styles.smallFootherTextRight}>Login here!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footherTextTwo}>
                    <Text style={styles.smallFootherText}>By signing up, you are agree with our </Text>
                    <Text style={styles.smallFootherTextRight}>Terms & Conditions</Text>
                </View>

            </LinearGradient>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        padding:15,
        alignContent:'center',
    },
    headerText:{
        marginTop:10,
        fontSize:73,
        fontFamily:'Roboto-Light',
        color:'white'
    },
    BodyText:{
        marginTop:10,
        fontSize:18,
        fontFamily:'Roboto-Bold',
        color:'white'
    },
    inputStyle:{
        height: 50,
        marginTop: 12,
        borderWidth: 1,
        paddingLeft:30,
        borderRadius:50,
        borderColor:'#695D91',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#695D91'
    },
    btnRegisterStyle:{
        marginTop:50
    },
    footherText:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:100
    },
    smallFootherText:{
        fontFamily:'Roboto-Light',
        fontSize:12,
        color:'white',
    },
    smallFootherTextRight:{
        fontFamily:'Roboto-Light',
        fontSize:12,
        color:'white',
        marginLeft:5,
        textDecorationLine:'underline'
    },
    footherTextTwo:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    }
})