// for admin view perpose

import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Button, List, useTheme } from 'react-native-paper';
import Accordion from 'react-native-collapsible/Accordion';
import axios from 'axios';
import BASE_URL from '../../src/Common/BaseURL';
import { UserContext } from '../../src/Context/UserContext';
import { AuthContext } from '../../src/Context/AuthContext';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SuperviserDetailView = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const userId = route.params.userId;

    console.log("userId", userId);
  
    const [pendingUser, setPendingUser] = useState([]);
  
    useEffect(() => {
      getUserDetail();
    }, []);
  
    const getUserDetail = () => {
      axios
        .get(`${BASE_URL}supervisors/user/${userId}`)
        .then((response) => {
          setPendingUser(response.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
  
    if (pendingUser.length === 0) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.topbar}>
            <Text style={styles.text}>Supervisor's Details</Text>
          </View>
          <View style={styles.circle}></View>
            <View>
              <Text style={styles.nameText}>{pendingUser.user.name}</Text>
              <Text style={styles.joinDate}>Signed on {pendingUser.Data.approved_date}</Text>
            </View>
          <Text style={styles.info}>Informations</Text>
            <View style={styles.DetailsContainer}>
              <View style={styles.detail}>
                  <Ionicons name="person-circle-outline" size={28} color="#A9B5AA" />
                  <Text style={styles.detailText}>{pendingUser.user.name}</Text>
              </View>
              <View style={styles.detail}>
                  <Ionicons name="mail-unread-outline" size={28} color="#A9B5AA" />
                  <Text style={styles.detailText}>{pendingUser.user.email}</Text>
              </View>
              <View style={styles.detail}>
                  <Ionicons name="call-outline" size={28} color="#A9B5AA" />
                  <Text style={styles.detailText}>{pendingUser.user.mobile_no}</Text>
              </View>
              <View style={styles.detail}>
                  <Ionicons name="settings-outline" size={28} color="#A9B5AA" />
                  <Text style={styles.detailText}>{pendingUser.user.role}</Text>
              </View>
              <View style={styles.detail}>
                  <Ionicons name="hammer-outline" size={28} color="#A9B5AA" />
                  <Text style={styles.detailText}>{pendingUser.Data.work_type}</Text>
              </View>
              
            </View>
          <Text style={styles.info}>In Progress Works</Text>
          
            
        </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    topbar: {
      backgroundColor: "#19AFE2",
      width: "100%",
      height: 67,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginTop:15,
    },
    circle: {
      width: 80,
      height: 80,
      backgroundColor: '#D9D9D9',
      borderRadius: 40,
      marginTop: 20,
      marginBottom: 20,
      left: windowWidth*0.4,
     
    },
    nameText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 4,

    },
    joinDate: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'regular',
      
    },
    info: {
      fontSize: 20,
      fontWeight: 'medium',
      paddingTop:20,
      paddingHorizontal:20,

    },
    DetailsContainer:{},
    detail: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 40,
      paddingTop: 10,
    },
    detailText: {
      paddingLeft: 40,
      textAlign : 'left',
    },
    

  })
  
  export default SuperviserDetailView;
  


//   user: {
//     _id: new ObjectId("64a719f39206d83b6ac5575a"),
//     name: 'Thisaru Rathnayake',
//     email: 'thisaru@gmail.com',
//     mobile_no: '0999999999',
//     password: '$2b$10$u07oLFAN4ffP4kNYnuws..CRYHA1nToZhkYwfbnaU4QXN6qs9ofKS',
//     role: 'supervisor',
//     accepted: false,
//     complainer_type: 'other',
//     complains: [],
//     __v: 0
//   },
//   pendingData: {
//     _id: new ObjectId("64a719f39206d83b6ac5575b"),
//     userID: new ObjectId("64a719f39206d83b6ac5575a"),
//     work_type: 'irigation',
//     complains: [],
//     approved_date: 2023-07-06T19:45:55.797Z,
//     __v: 0
//   }
// }