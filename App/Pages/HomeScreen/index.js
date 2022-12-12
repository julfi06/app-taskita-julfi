import * as React from 'react';
import {StyleSheet, View,SafeAreaView, Text, Image, Dimensions, ScrollView} from 'react-native';
import {
  ICNotif
} from '../../assets'
import { MiniCard } from '../../Componets'
import { useSelector, useDispatch } from 'react-redux'
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default HomeScreen = () => {
  const nama = useSelector((state) => state.user.nama)
  const email = useSelector((state) => state.user.email)
  const month = useSelector((state) => state.config.bulan)
  const day = useSelector((state) => state.config.hari)
  const curDate = new Date();
  const hari = curDate.getDay();
  const curMonth = curDate.getMonth();

  const hariSekarang = day[hari];
  const hariBesok = day[hari + 1];
  const hariLusa = day[hari + 2];

  const tglSekarang= curDate.getDate();
  const tglBesok  = tglSekarang+ 1;
  const tglLusa   = tglSekarang+ 2;

  const displayMonth = month[curMonth];

  const onPresDate=(date)=>{
    alert('tes'+ date)
  }

  return (
    <SafeAreaView style={{backgroundColor:'#261863', flex:1}}>
      <View style={style.containerTop}>
        <View >
          <Text style={style.textNameStyle}>{nama}</Text>
          <Text style={style.textWelcome}>{email}</Text>
        </View>
        <View>
          <Image
            source={ICNotif}/>
        </View>
      </View>

      <View style={{padding:15}}>
        <Text style={{color:'white', textAlign: 'center', fontSize: 20}}>{displayMonth}</Text>
        <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-between', paddingLeft:15, paddingRight:15}}>
          <MiniCard 
            isActive={true} 
            day={hariSekarang}
            date={tglSekarang}
            onPress={()=>onPresDate(tglSekarang)}/>

          <MiniCard
            day={hariBesok}
            date={tglBesok}
            onPress={()=>onPresDate(tglBesok)}/>

          <MiniCard
            day={hariLusa}
            date={tglLusa}
            onPress={()=>onPresDate(tglLusa)}/>
            
        </View>
      </View>
      
      <View style={style.bodyContent}>
        <ScrollView style={{padding:30}}>
          <Text></Text>
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerTop:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15,
    marginTop:5
  },
  textNameStyle:{
    fontWeight:'bold',
    fontSize:20,
    color:'#A85CA3'
    
  },
  textWelcome:{
    color:'white',
    fontWeight:'bold',
    fontSize:15,
  },
  bodyContent:{
    height:WINDOW_HEIGHT, 
    backgroundColor:'white',
    borderTopRightRadius:40,
    borderTopLeftRadius:40
  }
})