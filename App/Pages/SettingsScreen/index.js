import * as React from 'react';
import {
  View, 
  Text, 
  Image, 
  StyleSheet
} from 'react-native';
import {
  IconLock,
  IconMail
} from '../../assets'
import { useSelector, useDispatch } from 'react-redux'
import { resetState } from '../../reducer/UserReducer'
import { PrimaryButton } from '../../Componets'

const CardView = (props)=>{
  return (
    <View style={{
      flexDirection:"row", 
      padding:14,
      borderBottomWidth:2,
      borderBottomColor:"#F9F9F9", 
      backgroundColor:"white"}}>
      <View style={{flex:1, alignContent:"center"}}>
          <Image source={IconMail} style={{width: 30, height: 30}}/>
      </View>
      <View style={{flex:5}}>
        <Text style={{fontSize:16, fontWeight:"bold"}}>{props.title}</Text>
        <Text>{props.value}</Text>
      </View>
    </View>
  )
}

export default SettingsScreen = ({navigation}) => {
  const id = useSelector((state) => state.user.id)
  const nama = useSelector((state) => state.user.nama)
  const email = useSelector((state) => state.user.email)
  const [IsLoading, onChangeLoading] = React.useState(false);
  const dispatch = useDispatch()
  
  const onSignOut =()=>{
    onChangeLoading(true)
    dispatch(resetState())
    onChangeLoading(false)
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={{flex: 1}}>
      <CardView title="Id" value={id}/>
      <CardView title="Account Name" value={nama}/>
      <CardView title="Email"  value={email}/>

      <PrimaryButton 
          isLoading={IsLoading}  
          customeStyle={styles.btnSignout} 
          onPress={()=>onSignOut()}
          title="Sign Out"/>
    </View>
  );
};

const styles = StyleSheet.create({
  btnSignout:{
    margin:25,
    marginTop:80
  }
})