import * as React from 'react';
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    TextInput , 
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';
import {
    IconGmail,
    IconFacebook,
    IconTwitter
} from '../../assets';
import {
    PrimaryButton
} from '../../Componets'
import { setId, setEmail, setNama } from '../../reducer/UserReducer'
import { useDispatch } from 'react-redux'

export default LoginScreen =  ({navigation}) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [IsLoading, onChangeLoading] = React.useState(false);
    const [isError, onError] = React.useState(false);
    const [message, onSetMessage] = React.useState(null);
    const dispatch = useDispatch()

    const onCheckLogin =()=>{
        onChangeLoading(true)
        onError(false)
        axios.post('https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/findOne',{
            "dataSource": "Cluster0",
            "database": "app_taskita",
            "collection": "member",
            "filter": { "email": email, "password":password}
        },{
            headers:{
                'api-key': 'zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC'
            }
        }).then(res=>{
            if(res.data.document != null ){
                onError(false)
                dispatch(setId(res.data.document._id))
                dispatch(setNama(res.data.document.name))
                dispatch(setEmail(res.data.document.email))

                navigation.replace('MainScreen')
            }else{
                onSetMessage('invalid username and password')
                onError(true)
            }
        }).catch(err=>{
            onError(true)
            onSetMessage(err.message)
            console.log(err)
            
        }).finally(()=>{
            onChangeLoading(false)
        })
    }

    const ErrorMessage=()=>{
        if(isError){
            return <Text style={{color:'red', marginTop:10, textAlign:'center'}}>{message}</Text>
        }else{
            return null
        }
    }

    return (
        <SafeAreaView style={{ flex:1 }}>
            <LinearGradient
                colors={['#131B63', '#481162']}
                style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#131B63" />

                <Text style={styles.HeaderText}>Login</Text>
                <Text style={styles.BodyText}>Please login to your account</Text>
                <TextInput 
                    style={[styles.inputStyle, {marginTop:20}]} 
                    placeholder="Email"
                    value={email}
                    onChangeText={onChangeEmail}
                />

                <TextInput 
                    style={styles.inputStyle} 
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={onChangePassword}/>

                <PrimaryButton 
                    isLoading={IsLoading}  
                    customeStyle={styles.btnLoginStyle} 
                    onPress={()=>onCheckLogin()}
                    title="LOGIN"/>

                <ErrorMessage/>

                <Text style={styles.smallText}>Forgot Password ?</Text>
                <Text style={styles.smallTextCenter}>Or login with</Text>
                <View style={styles.loginOption}>
                    <Image source={IconGmail} style={styles.imgLoginIcon}/>
                    <Image source={IconFacebook}  style={styles.imgLoginIcon}/>
                    <Image source={IconTwitter}  style={styles.imgLoginIcon}/>
                </View>

                <View style={styles.footherText}>
                    <Text style={styles.smallFootherText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')}>
                        <Text style={styles.smallFootherTextRight}>Create new now!</Text>
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

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:15,
        alignContent:'center',
        backgroundColor:'#131B63'
    },
    HeaderText:{
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
        marginTop: 8,
        borderWidth: 1,
        paddingLeft:30,
        borderRadius:50,
        borderColor:'#695D91',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#695D91'
    },
    btnLoginStyle:{
        marginTop:40,
    },
    smallText:{
        fontFamily:'Roboto-Light',
        fontSize:14,
        marginTop:12,
        color:'white',
        textAlign:'right'
    },
    smallTextCenter:{
        fontFamily:'Roboto-Light',
        fontSize:14,
        marginTop:30,
        color:'white',
        textAlign:'center'
    },
    loginOption:{
        justifyContent:'center',
        flexDirection:'row'
    },
    imgLoginIcon:{
      margin:10
    },
    footherText:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
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
        marginTop:5
    }
});