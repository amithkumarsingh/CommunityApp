import * as React from 'react';
import {Button, View, Text, SafeAreaView,TouchableOpacity,Image} from 'react-native';
import styles from '../components/contants/GlobalStyles';


const ChatScreen = ({navigation}) => {
  const hamburger = require('./ImageAssets/hamburger.png');
  const serachIcon = require('./ImageAssets/search_inactive.png');
  const notifIcon = require('./ImageAssets/ic_notification.png');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
      <View style={styles.TopBar}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}>
            <Image style={{width:30, height:30, tintColor:'white'}} source={hamburger} />
          </TouchableOpacity>
          <Text style={{alignItems:'center',justifyContent:'center', fontSize:20, color:'#ffffff', verticalAlign:'middle', marginStart:16}}>
            Chat
          </Text>
        </View>
        <View style={styles.rightContainer} >
          <Image style={{ width: 25, height: 25,  marginEnd:16, tintColor:"#ffffff"}} source={serachIcon} />
          <Image style={{ width: 25, height: 25  }} source={notifIcon} />
        </View>
      </View>
        {/* <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Chat Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('SettingScreen')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer with Bottom Tab
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text> */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, fontStyle: 'italic'}}>
            Chat Page is Under Development
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;