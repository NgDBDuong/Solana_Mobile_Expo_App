import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity, FlatList, ActivityIndicator, StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Mission = () => {

  const navigation = useNavigation();
  // const [data,setData] = useState([]);

  // useEffect(()=> {
  //   fetchData();
  // },[]);


  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://192.168.1.109:3001/api');
  //     setData(response.data);
  //   } catch (error) {
  //     console.log('Error:',error);
  //   }
  // }

  const handlePress = item => {
    navigation.navigate('Details', {item});
  };



  const [isLoading, setLoading] = useState(true);
  const [abc, setAbc] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://192.168.1.109:3001/api/');
      const json = await response.json();
      setAbc(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
    
  return (
    <View style= {styles.container}>
      <ScrollView>
      <View >
      {abc.map(item => (
        <TouchableOpacity key={item.id} onPress={()=> handlePress(item)}>   
        <View key={item.id} style={styles.mission}>
          <Text style={styles.textMission}>{item.tenNV}</Text>
            <Text style={styles.textcc}><Text>Mức độ : {item.level}      </Text><Text>+{item.point}</Text> <Image
          source={require('../../../assets/diem.png')}
          style={styles.pointsIcon}
        />
          </Text>
        
          {/* Add more fields as needed */}
        </View>
        </TouchableOpacity>
      ))}
      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.textMission}>{item.title}</Text>
            <Text style={styles.textcc}><FontAwesome name="calendar" size={13} color="red" />{item.date}<Text>       Mức độ : {item.level}      </Text><Text>{item.point}</Text> <AntDesign name="star" size={15} color="yellow" />  </Text>
            
          </View>
        )}

        
      />
      
      
      */}

            {/* <Text style={styles.textMission}>Nhiệm vụ 1</Text>
            <Text style={styles.textcc}><FontAwesome name="calendar" size={13} color="red" /> 24/2/2024<Text>       Mức độ : dễ      </Text><Text>+36</Text> <AntDesign name="star" size={15} color="yellow" />  </Text>
           */}
        </View>
      </ScrollView>
      

        
      

      
      
      
        
      
    </View>
  )
}

export default Mission

const styles = StyleSheet.create({
      container:  {
          flex : 1,
          
      },
    mission : {
        backgroundColor : '#fff',
        width: 350,
        height: 110,
        borderWidth : 1,
        
        borderColor : '#fff',
        margin : 15,
        borderRadius : 20,
    },
    textMission : {
        fontSize:24,
        fontWeight:'bold',
        marginLeft : 15,
        marginTop : 10,
    },
    textcc : {
        marginLeft : 15,
    },
    
   
})