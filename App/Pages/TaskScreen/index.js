import * as React from "react";
import axios from 'axios';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { ICNotif, IcPensil, IcTask, IconMail, IcCheck } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
const WINDOW_HEIGHT = Dimensions.get("window").height;



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

export default TaskScreen = ({ navigation }) => {
  const summary = useSelector((state) => state.summary)
  const activedate = useSelector((state) => state.activedate)
  const timestart = useSelector((state) => state.timestart)
  const timeend = useSelector((state) => state.timeend)
  const nama = useSelector((state) => state.user.nama)
  const email = useSelector((state) => state.user.email)
  const id = useSelector((state) => state.user.id)
  const dispatch = useDispatch()

  axios.post('https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/findOne',{
        "dataSource": "Cluster0",
        "database": "app_taskita",
        "collection": "task",
        "filter": { 
          "userId": id,
          "active_date": activedate
        }
    },{
      headers:{
          'api-key': 'zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC'
      }
    })
  

  return (

    
    <SafeAreaView style={{ backgroundColor: "#261863", flex: 1 }}>
      <View style={style.containerTop}>
        <View >
          <Text style={style.textNameStyle}>{nama}</Text>
        </View>
        <View>
          <Image style={style.lonceng} source={ICNotif}/>
        </View>
      </View>

      <View style={style.bodyContent}>
        <ScrollView style={{ padding: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("AddNewScreen")}>
              <Image source={IcPensil} style={style.pensil} />
              <Text style={style.new}>Add New</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("")}>
              <Image source={IcTask} style={style.task} />
              <Text style={style.filter}>Filter Task</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      
      <View style={style.bodyContent2}>
        <ScrollView style={{ padding: 10 }}>
        <Text style={style.teksbody}>All Task</Text>
        <View style={style.itemall}>
          <View style={style.itemdate}>
            <Image source={IcCheck} style={style.gambar1}></Image>
              <Text>10 April 22</Text>
              <Text style={{marginLeft: 15, color:'#777878'}}>12.00</Text>
          </View>
            <View style={style.item}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={ICNotif} style={style.gambar2}/>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={style.teksitem}>MEETING WITH CEO</Text>
                        </View>
                </View>
            </View>
        </View>
        </ScrollView>
      </View>
      {/* <View style={style.bodyContent2}>
        <ScrollView style={{ padding: 10 }}>
          <View style={{padding:5}}>
          <View style={{flex: 1}}>
      <CardView title="Task" value={summary}/>
      <CardView title="Active Date" value={activedate}/>
      <CardView title="Time Start"  value={timestart}/>
      <CardView title="Time End"  value={timeend}/>
    </View>
    </View>
        </ScrollView>
      </View> */}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  containerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
    paddingBottom: 50,
  },
  textNameStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#A85CA3",
    marginLeft: 15,
    marginTop:3
  },
  textall: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  lonceng: {
    height:40,
    width:40,
    marginRight:20
  },
  task: {
    resizeMode: "contain",
    marginTop: -10,
    marginRight: -10,
    marginLeft: 85,
    width: 40,
    height: 60,
  },
  pensil: {
    resizeMode: "contain",
    marginTop: -10,
    marginLeft: 12,
    width: 40,
    height: 60,
  },
  new: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
  },
  filter: {
    marginTop: 10,
    marginLeft: 5,
    color: "white",
    fontWeight: "bold",
  },
  bodyContent: {
    height: 150,
    marginTop: -30,
    backgroundColor: "violet",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  bodyContent2: {
    marginTop: -90,
    height: WINDOW_HEIGHT,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  teksbody:{
    fontSize:30,
    marginLeft:110
  },
  itemall:{
    flexDirection: "row",
    marginLeft:15,
    marginTop:10
  },
  itemdate:{
    height: 100, 
    width:80
  },
  gambar1:{
    width:30,
    height:30,
    marginLeft:20
  },
  item:{
    height: 80, 
    width:230,
    backgroundColor: '#F5F5F5',
    borderRadius:20,
  },
  gambar2:{
    height:60,
    width:60,
    marginTop:10,
    marginLeft:10
  },
  teksitem:{
    color:'black',
    marginTop:20,
    marginLeft:10
  }
});