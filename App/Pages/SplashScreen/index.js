import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, StatusBar} from 'react-native';
import {IconSplash} from '../../assets';
import { useSelector } from 'react-redux'

export default SplashScreen = ({navigation}) => {
  const id = useSelector((state) => state.user.id)

  React.useEffect(() => {
    setTimeout(() => {
      console.log('id',id)
      if(id !=""){
        navigation.replace('MainScreen')
      }else{
        navigation.replace('LoginScreen')
      }
     }, 3000)
    }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#131B63" />
        
      <View style={styles.content}>
        <Image source={IconSplash} style={styles.imgStyle} />
        <Text style={styles.textHeader}>Manage task</Text>
        <Text style={styles.textHeader}>make live is balance</Text>
        <Text style={styles.text}>Arrange any task and make it
         done in your to do list</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131B63',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    fontSize: 32,
    color: 'white',
    fontFamily:'Lato-Bold'
  },
  text: {
    fontFamily:'Lato-Regular',
    fontSize:14,
    color: 'white',
    marginTop:10
  },
  imgStyle:{
    marginBottom:10
  }
});
