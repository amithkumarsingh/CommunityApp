import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, ActivityIndicator, FlatList, Pressable,
} from 'react-native';
import axios from 'axios';

import Api from '../components/contants/Api';
import Colors from '../components/contants/Colors';


const HomeScreen = ({ navigation }) => {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const hamburger = require('./ImageAssets/hamburger.png');
  const profileIcon = require('./ImageAssets/ic_profile.png');
  const serachIcon = require('./ImageAssets/search_inactive.png');
  const notifIcon = require('./ImageAssets/ic_notification.png');
  const bookmark = require('./ImageAssets/ic_bookmark.png');
  const image = require('./ImageAssets/image.jpg');
  const share = require('./ImageAssets/ic_share.png');

  const like = require('./ImageAssets/ic_liked.png');

  const comment = require('./ImageAssets/ic_comment.png');



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          Api.getCommunityFeedsApi
        );
        setData(response.data.data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function clickJoin() {
    alert('Clicked on join')
  }
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: 'row', position: '' }}>
          <Image style={{
            width: 50, height: 50, backgroundColor: 'lightgreen',
            borderRadius: 22, margin: 8
          }} source={profileIcon} />
          <View style={{ flex: 1, flexDirection: 'column', marginTop: 5 }}>
            <Text style={{ color: '#009858', fontSize: 18, fontStyle: 'normal' }}>{item.title} </Text>
            <>
              {
                item.createdBy === null ? null :
                  item?.createdBy?.firstName !== null && item?.createdBy?.firstName !== "" ?
                    <Text style={{ color: 'gray', fontSize: 14 }}>create by : {item.createdBy.firstName}</Text> :
                    null
              }
            </>

          </View>
          <Text style={{
            justifyContent: 'flex-end', margin: 8, borderWidth: 1,
            borderColor: "gray",
            borderRadius: 12, padding: 8, alignSelf: 'center', backgroundColor: Colors.primary500, color: '#fff'
          }}
            onPress={clickJoin}>Follow</Text>
        </View>
        <View style={{ flexDirection: 'column', margin: 8 }}>
          {
            item.description !== null && item.description !== "" ?
              <Text style={{ fontSize: 18, fontStyle: 'normal', fontWeight: 'bold' }}>{item.description}</Text>
              :
              null
          }
          {
            item.shortDescription !== null && item.shortDescription !== "" ?
              <Text style={{ color: 'gray', fontSize: 14, marginBottom: 12 }}>
                {item.shortDescription}
              </Text> :
              null
          }
          <Pressable onPress={() => { navigation.navigate('FeedDetailsScreen', { feedDetails: item }) }}>
            <Image style={{ width: '100%', height: 200 }} source={image} />
          </Pressable>
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <Text style={{ color: '#009858', fontSize: 12, fontStyle: 'normal' }}>20 likes </Text>
            <Text style={{ color: '#009858', fontSize: 12, fontStyle: 'normal' }}>140 comments</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'flex-end' }}>
              <Text style={{ color: 'gray', fontSize: 12, fontStyle: 'normal' }}>14 views </Text>
              <Text style={{ color: 'gray', fontSize: 12, fontStyle: 'normal' }}> 24 shares</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View style={{ flexDirection: 'row', margin: 8 }}>
            <View style={{
              flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 6,
              alignContent: 'center', alignItems: 'center'
            }}>
              <Image style={{
                width: 15, height: 15, alignContent: 'center',
                alignItems: 'center'
              }} source={like} />
              <Text style={{ color: '#009858', fontSize: 12, fontStyle: 'normal', marginStart: 6 }}>Like</Text>
            </View>
            <View style={{
              flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 6,
              alignContent: 'center', alignItems: 'center'
            }}>
              <Image style={{
                width: 15, height: 15, alignContent: 'center',
                alignItems: 'center'
              }} source={comment} />
              <Text style={{ color: 'gray', fontSize: 12, fontStyle: 'normal', marginStart: 6 }}>Comment</Text>
            </View>
            <View style={{
              flex: 1, flexDirection: 'row', justifyContent: 'flex-end', margin: 6,
              alignContent: 'center', alignItems: 'center'
            }}>
              <Image style={{
                width: 15, height: 15, alignContent: 'center',
                alignItems: 'center'
              }} source={share} />
              <Text style={{ color: 'gray', fontSize: 12, fontStyle: 'normal', marginStart: 6 }}>Share</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'gray',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.TopBar}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}>
            <Image style={{ width: 30, height: 30, tintColor: 'white' }} source={hamburger} />
          </TouchableOpacity>
          <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#ffffff', verticalAlign: 'middle', marginStart: 16 }}>
            Home
          </Text>
        </View>
        <View style={styles.rightContainer} >
          <Image style={{ width: 25, height: 25, marginEnd: 16, tintColor: "#ffffff" }} source={serachIcon} />
          <Image style={{ width: 25, height: 25 }} source={notifIcon} />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={{ position: 'absolute', top: "40%", right: 0, left: 0 }}>
        <ActivityIndicator animating={loading} size="large" color="green" />
        {error ? <Text style={{ textAlign: 'center', fontSize: 18 }}>An Error has occurred, Please try after sometime.</Text> : null}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  TopBar: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
    backgroundColor: '#009858',
    position: 'sticky',
    top: 0,
    width: '100%'
  },
  leftContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginStart: 8,
  },
  middleContainer: {
    flex: 2,
    flexDirection: 'row',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginEnd: 16,
  },
  rightIcon: {
    paddingHorizontal: 20,
    resizeMode: 'contain',
    backgroundColor: 'white',
    marginEnd: 8,
  },
  SectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 40,
    width: '70%',
    borderRadius: 5,
    margin: 10,
    marginLeft: 10
  },
  ImageStyle: {
    padding: 8,
    margin: 5,
    height: 10,
    width: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  appBar: {
    backgroundColor: '#79B45D',
  }, buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  }
})
export default HomeScreen;