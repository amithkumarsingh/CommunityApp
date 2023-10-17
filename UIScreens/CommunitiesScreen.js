import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import axios from 'axios';

import Api from '../components/contants/Api';
import Utils from '../components/contants/Utils'
import styles from '../components/contants/GlobalStyles';
import Colors from '../components/contants/Colors';
import filter from 'lodash.filter'



const CommunitiesScreen = ({ navigation }) => {
  const hamburger = require('./ImageAssets/hamburger.png');
  const serachIcon = require('./ImageAssets/search_inactive.png');
  const communityImage = require('./ImageAssets/communityImage.jpg');
  const closeIcon = require('./ImageAssets/ic_close.png');



  const [commList, setCommList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [isSearchClick, setIsSearchClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [fullCommunList, setFullCommunList] = useState(null);

  const handleQuery = (query) => {
    setSearchQuery(query);
    const formattedQuery = query;
    const filterData = filter(fullCommunList, (community) => {
      return contains(community, formattedQuery);
    })
    setCommList(filterData);
  }

  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    } else {
      return false;
    }

  }

  function ClearSearchData() {
    setSearchQuery('')
    setCommList(fullCommunList);
    setIsSearchClicked(false)

  }
  useEffect(() => {
    const fetchCommList = async () => {
      if (Utils.isLoadCommListInCommunityScreen) {
        try {
          const response = await axios.get(
            Api.getCommunityList);
          setCommList(response.data.data);
          setIsLoading(false);
          setFullCommunList(response.data.data)
          Utils.isLoadCommListInCommunityScreen = false;
        } catch (e) {
          setError(e);
          setIsLoading(false)
          Utils.isLoadCommListInCommunityScreen = true;
        }
      }
    }
    fetchCommList();

  });

  const renderItem = ({ item }) => {
    return (
      <View style={innerStyles.communityNameView}>
        <Image style={{ opacity: .8, width: '100%', height: 120, alignSelf: 'center', borderRadius: 15 }}
          source={communityImage} />
        <Text style={{
          flex: 2, color: '#fff', fontSize: 22,
          fontStyle: 'italic', marginStart: 16, marginTop: 16, position: 'absolute'
        }}>{item.name}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={{
            flex: 1, flexDirection: 'row', color: 'black',
            fontSize: 14, fontStyle: 'normal', marginStart: 6, marginTop: 10
          }}>{item.about}</Text>
          <View style={{
            margin: 6, backgroundColor: Colors.primary500, borderColor: '#ccc', borderRadius: 12, borderWidth: 1, padding: 8, justifyContent: 'flex-end',
            alignSelf: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', flexDirection: 'row',
          }}>
            <Text style={{ color: Colors.colorWhite, fontSize: 12, fontStyle: 'normal', marginStart: 6 }}>Follow</Text>
          </View>
        </View>

      </View>

    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.TopBar}>
          <View style={styles.leftContainer}>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}>
              <Image style={{ width: 30, height: 30, tintColor: 'white' }} source={hamburger} />
            </TouchableOpacity>
          </View>
          {
            !isSearchClick ? <Text style={{ marginTop: 8, marginStart: 12, alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#ffffff', verticalAlign: 'middle', marginBottom: 12 }}>
              Your Communities
            </Text> : null
          }

          {
            isSearchClick ?
              <View style={[innerStyles.searchBox, { flex: 12, marginTop: 10, marginEnd: 24, marginStart: 24, justifyContent: 'space-between', marginBottom: 12 }]}>
                <View style={{ flexDirection: 'row' }}>
                  <TextInput placeholder='Search Communities' placeholderTextColor="#fff"
                    autoCapitalize='none' autoCorrect={false}
                    value={searchQuery}
                    onChangeText={(query) => {
                      handleQuery(query)
                    }} style={{
                      color: '#fff',
                      alignSelf: 'flex-start', fontSize: 12, marginTop: 2
                    }}
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
            <View style={[styles.rightContainer, { marginBottom: 8 }]}>
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
          data={commList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} />
        <View style={{ position: 'absolute', top: "40%", right: 0, left: 0 }}>
          <ActivityIndicator animating={loading} size="large" color="green" />
          {error ? <Text style={{ textAlign: 'center', fontSize: 18 }}>An Error has occurred, Please try after sometime.</Text> : null}
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CommunitiesScreen;

const innerStyles = StyleSheet.create({
  communityNameView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 4,
    marginBottom: 2,
    marginStart: 6,
    marginEnd: 6,
    borderColor: '#ccc',
    borderRadius: 12,
    borderWidth: 1,
    padding: 5
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 1,
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 12
  },
  searchBox: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    fontSize: 24,
    width: '90%',
    height: 40,
    marginBottom: 20
  }

})