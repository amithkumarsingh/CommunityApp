import * as React from 'react';
import {
  Button, View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet,
  ActivityIndicator, FlatList, Alert, TextInput
} from 'react-native';
import styles from '../components/contants/GlobalStyles';
import Colors from '../components/contants/Colors';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Api from '../components/contants/Api';

import filter from 'lodash.filter'

const UserScreen = ({ navigation }) => {
  const hamburger = require('./ImageAssets/hamburger.png');
  const closeIcon = require('./ImageAssets/ic_close.png');
  const serachIcon = require('./ImageAssets/search_inactive.png');
  const notifIcon = require('./ImageAssets/ic_notification.png');
  const profileIcon = require('./ImageAssets/profileIcon.png');
  const [userList, setUserList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearchClick, setIsSearchClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [fullUserList, setFullUserList] = useState(null);


  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const res = await axios.get(Api.userListApi);
        setUserList(res.data.data)
        setLoading(false)
        setError(null)
        setFullUserList(res.data.data)
      }
      catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchUserList();
  }, [])



  const renderItem = ({ item }) => {
    return (
      <View style={innserStyles.container}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'lightgray', borderRadius: 16, borderWidth: 1 }}
          onPress={() =>
            navigation.navigate('UserDetailsScreen', { userDetails: item, })
          }>
          <Image style={{
            width: 50, height: 50, backgroundColor: 'lightgreen',
            borderRadius: 22, margin: 8
          }} source={profileIcon} />
          <View style={{ paddingEnd: 70 }}>
            <Text style={{ color: "gray", fontSize: 20 }}>{item.firstName + ' ' + item.lastName}</Text>
            <Text style={{ color: Colors.blueColor, fontSize: 18 }}>{item.phone}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const handleQuery = (query) => {
    setSearchQuery(query);
    const formattedQuery = query;
    const filterData = filter(fullUserList, (users) => {
      return contains(users, formattedQuery);
    })
    setUserList(filterData);
  }

  const contains = ({ firstName, lastName }, query) => {
    if (firstName.includes(query) || lastName.includes(query)) {
      return true;
    } else {
      return false;
    }

  }

  function ClearSearchData() {
    setSearchQuery('')
    setUserList(fullUserList);
    setIsSearchClicked(false)

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.TopBar}>
          <View style={{marginLeft:12,marginTop:12}}>
            <TouchableOpacity style={{ width: 50, height: 50 }}
              onPress={() => navigation.openDrawer()}>
              <Image style={{ width: 30, height: 30, tintColor: 'white' }} source={hamburger} />
            </TouchableOpacity>
          </View>
          {
            !isSearchClick ? <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#ffffff', verticalAlign: 'middle',marginBottom:12 }}>
              Users
            </Text> : null
          }

          {
            isSearchClick ?
              <View style={[innserStyles.searchBox, { flex: 15,marginTop:10,marginEnd:18, justifyContent: 'space-between',marginBottom:12 }]}>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput placeholder='Search Users' placeholderTextColor="#fff"
                    autoCapitalize='none' autoCorrect={false}
                    value={searchQuery}
                    onChangeText={(query) => {
                      handleQuery(query)
                    }} style={{color:'#fff',
                    alignSelf:'flex-start',fontSize:12,marginTop:2}}
                  ></TextInput>
                  <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <TouchableOpacity
                      onPress={() => {
                        ClearSearchData()
                      }}>
                      <Image style={{ width: 24, height: 24, tintColor: 'white', }} source={closeIcon} />
                    </TouchableOpacity>
                  </View>
                </View>

              </View> : null
          }
          {!isSearchClick ?
            <View style={[styles.rightContainer,{marginBottom:8}]}>
              <TouchableOpacity onPress={() =>
                setIsSearchClicked(!isSearchClick)
              }>
                <Image style={{ width: 20, height: 20, marginEnd: 16, tintColor: "#ffffff" }} source={serachIcon}
                />
              </TouchableOpacity>
            </View> : null
          }

        </View>
        <FlatList
          data={userList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={{ position: 'absolute', top: "40%", right: 0, left: 0 }}>
          <ActivityIndicator animating={loading} size="large" color="green" />
          {error ? <Text style={{ textAlign: 'center', fontSize: 18 }}>An Error has occurred, Please try after sometime.</Text> : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;

const innserStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8
  },
  searchBox: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    fontSize: 24,
    width: '90%',
    height: 40,
    marginBottom:20
  }
});