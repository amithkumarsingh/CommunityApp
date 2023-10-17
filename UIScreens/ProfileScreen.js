import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

const ProfileScreen = ({navigation}) => {
  const users = [
    {
        "id": 1,
        "communityName": "Doctor's Community",
        "location": "USA",
    },
    {
        "id": 2,
        "communityName": "Engineer's Community",
        "location": "UAE",
    },
    {
        "id": 3,
        "communityName": "Aparna State Complex",
        "location": "Canada",
    },
    {
        "id": 4,
        "communityName": "NCC Cyber Urbania",
        "location": "North America",
    },
    {
        "id": 5,
        "communityName": "My Home State Hub",
        "location": "Pakistan",
    },
    {
        "id": 6,
        "communityName": "ValueMomentum Community",
        "location": "Pakistan",
    }
];
const communityData = [
  {
    "id": 1,
    "communityName": "Doctor's Community",
    "location": "USA",
    "userName": "Mr. Amith Singh",
    "shotDescription": "A procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use."
  },
  {
    "id": 2,
    "communityName": "Engineer's Community",
    "location": "UAE",
    "userName": "Mr. Amith Singh",
    "shotDescription": "A procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use."
  },
  {
    "id": 3,
    "communityName": "Aparna State Complex Community",
    "location": "Canada",
    "userName": "Mr. Amith Singh",
    "shotDescription": "A procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use."
  },
  {
    "id": 4,
    "communityName": "NCC Cyber Urbania",
    "location": "North America",
    "userName": "Mr. Amith Singh",
    "shotDescription": "A procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use."
  },
  {
    "id": 5,
    "communityName": "My Home State Hub",
    "location": "Pakistan",
    "userName": "Mr. Amith Singh",
    "shotDescription": "A procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use."
  },
  {
    "id": 6,
    "communityName": "ValueMomentum Community",
    "location": "India",
    "userName": "Mr. Amith Singh",
    "shotDescription": "A procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use."
  }
];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
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
            Explore Screen
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
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;