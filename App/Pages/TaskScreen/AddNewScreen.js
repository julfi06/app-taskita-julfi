import React, {useState} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { IcDate, IcTime } from "../../assets";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
const WINDOW_HEIGHT = Dimensions.get("window").height;
import { PrimaryButton } from "../../Componets";
import { useSelector, useDispatch } from 'react-redux'

export default AddNewScreen = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("MM/DD/YYYY");
  const [text1, setText1] = useState("HH:MM");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios')
    setDate(currentDate);

    const tempDate = new Date(currentDate);
    const fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    const fTime1 = tempDate.getHours() + ' Hours | ' + tempDate.getMinutes() + ' Minutes';
    setText(fDate)
    setText1(fTime1)

    console.log(fDate + ' (' + fTime1 + ')')
  }
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }


  //Const untuk API
  const [summary, onChangeSummary] = React.useState(null);
  const [activedate, onChangeActiveDate] = React.useState(null);
  const [timestart, onChangeTimeStart] = React.useState(null);
  const [timeend, onChangeTimeEnd] = React.useState(null);
  const [message, onSetMessage] = React.useState(null);
  const [iserror, onError] = React.useState(null);
  const [isLoading, onChangeLoading] = React.useState(false);
  const id = useSelector((state) => state.user.id)

  const onAddNew=()=>{
    onChangeLoading(true)
    axios.post('https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/insertOne',{
        "dataSource": "Cluster0",
        "database": "app_taskita",
        "collection": "task",
        "document": { 
          "userId": id,
          "task": summary,
          "active_date": activedate,
          "time_start": timestart,
          "time_end": timeend,
          "progress": "Open"
        }
    },{
        headers:{
            'api-key': 'zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC'
        }
    }).then(res=>{
        navigation.replace('MainScreen',{screen:'TaskScreen'})
        onSetMessage('Data Berhasil Ditambahkan')
        alert('Data Berhasil Ditambahkan')
    }).catch(err=>{
      console.log(err)
      onError(true)
      onSetMessage('Data Gagal Ditambahkan')
      alert([message])
    }).finally(()=>{
      onChangeLoading(false)
    })

    }

  return (
    <SafeAreaView style={{ backgroundColor: "#261863", flex: 1 }}>     
      <View style={style.bodyContent}>

        <ScrollView style={{ padding: 15 }}>

          <View>
            <Text style={style.summary}>Sumary Task</Text>
              <TextInput
                numberOfLines={3}
                maxLength={150}
                value={summary}
                multiline
                placeholder={"Type Sumary Task"}
                style={style.inputText}
                onChangeText={onChangeSummary}
              />
          </View>

          <View>
            <Text style={style.summary}>Date</Text>
            <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={()=> onChange(setText)}>
                <Text 
                numberOfLines={1} 
                style={style.inputan}
                onChangeText={onChangeActiveDate}
                >{text}</Text>
            </TouchableOpacity>

              <TouchableOpacity onPress={() => showMode('date')}>
                <View style={style.iconbg1}>
                  <Image source={IcDate} style={style.icondate} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={style.summary}>Time Start</Text>
            <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={()=> onChange(setText1)}>
                <Text 
                numberOfLines={1} 
                style={style.inputan}
                onChangeText={onChangeTimeStart}
                >{text1}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => showMode("time")}>
                <View style={style.iconbg}>
                  <Image source={IcTime} style={style.icontime} />
                </View>  
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={style.summary}>Time End</Text>
            <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={()=> onChange(setText1)}>
                <Text 
                numberOfLines={1} 
                style={style.inputan}
                onChangeText={onChangeTimeEnd}
                >{text1}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => showMode("time")}>
                <View style={style.iconbg}>
                  <Image source={IcTime} style={style.icontime} />
                </View>  
              </TouchableOpacity>
            </View>
          </View>

          {show && (
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
          />)}

          <PrimaryButton
            customeStyle={style.btnSubmitStyle}
            onPress={()=>onAddNew()}
            title="Submit Data"
            isLoading={isLoading}
          />

        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputText: {
    borderColor: "#261863",
    backgroundColor: "#DADADA",
    fontSize: 15,
    paddingTop: 6,
    paddingBottom: 3,
    paddingRight: 0,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "top",
  },
  inputan: {
    borderColor: "#261863",
    backgroundColor: "#DADADA",
    fontSize: 12,
    paddingTop: 15,
    paddingRight: 0,
    paddingLeft: 10,
    paddingBottom: 15,
    marginRight: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "top",
    width:265
  },
  textNameStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#A85CA3",
  },
  textall: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
  icontime: {
    resizeMode: "contain",
    borderRadius: 7,
    marginLeft: 1,
    width: 35,
    height: 35,
    flex: 1,
  },
  icondate: {
    resizeMode: "contain",
    borderRadius: 7,
    marginLeft: 1,
    width: 35,
    height: 35,
    flex: 1,
  },
  iconbg: {
    padding: 5,
    paddingTop: 10,
    borderRadius: 5,
    backgroundColor: '#261863'
  },
  iconbg1: {
    padding: 5,
    paddingTop: 10,
    borderRadius: 5,
    backgroundColor: '#261863',
  },
  summary: {
    marginTop: 10,
    marginLeft: 9,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  filter: {
    marginTop: 10,
    marginLeft: 140,
    color: "white",
    fontWeight: "bold",
  },
  textWelcome: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  bodyContent: {
    marginTop: 100,
    height: 150,
    height: WINDOW_HEIGHT,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  btnSubmitStyle: {
    backgroundColor: "green",
    marginTop: 60,
  },
});