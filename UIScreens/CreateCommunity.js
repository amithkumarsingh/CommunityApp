import * as React from 'react';
import {
  Button, View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput, Alert,
  ActivityIndicator
} from 'react-native';
import styles from '../components/contants/GlobalStyles';
import Colors from '../components/contants/Colors';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Api from '../components/contants/Api';
import Utils from '../components/contants/Utils';
import DropDownPicker from 'react-native-dropdown-picker';




const CreateCommunity = ({ navigation }) => {
  hamburger = require('./ImageAssets/hamburger.png');
  serachIcon = require('./ImageAssets/search_inactive.png');
  notifIcon = require('./ImageAssets/ic_notification.png');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Public', value: 'Public' },
    { label: 'Private', value: 'Private' }
  ]);
  const [data, setData] = useState({
    communityName: '',
    description: '',
    websiteRef: '',
    communityType: '',
    isCommunityNameEmpty: true,
    isDescription: true,
    isWebsiteRef: true,
    isCommunityType: true,

  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const communityTypeData = [
    {
      id: 1,
      value: "Public"
    }, {
      id: 2,
      value: "Private"
    }
  ];

  const textInputChange = (inputData, callingFrom) => {
    if (callingFrom === 'CommunityName') {
      setData({
        ...data,
        communityName: inputData,
        isCommunityNameEmpty: true
      })

    } else if (callingFrom === 'Description') {
      setData({
        ...data,
        description: inputData,
        isDescription: true
      })
    } else if (callingFrom === 'websiteRef') {
      setData({
        ...data,
        websiteRef: inputData,
        isWebsiteRef: true
      })
    } else {
      setData({
        ...data,
        communityType: inputData,
        isCommunityType: true
      })
    }
  }
  const handleValidation = (val, callingFrom) => {

    if (callingFrom === 'CommunityName') {
      if (val.trim().length > 0) {
        setData({
          ...data,
          isCommunityNameEmpty: true
        });
      } else {
        setData({
          ...data,
          isCommunityNameEmpty: false
        })
      }
    } else if (callingFrom === 'Description') {
      if (val.trim().length > 0) {
        setData({
          ...data,
          isDescription: true
        });
      } else {
        setData({
          ...data,
          isDescription: false
        })
      }
    } else if (callingFrom === 'websiteRef') {
      if (val.trim().length > 0) {
        setData({
          ...data,
          isWebsiteRef: true
        });
      } else {
        setData({
          ...data,
          isWebsiteRef: false
        })
      }
    } else {
      if (val.trim().length > 0) {
        setData({
          ...data,
          isCommunityType: true
        });
      } else {
        setData({
          ...data,
          isCommunityType: false
        })
      }
    }

  }

  const handleSubmit = () => {
    if (data.communityName !== '' && data.description !== '' && data.websiteRef !== '' && data.communityType !== '') {
      setLoading(true);
      createCommunity();
    } else {
      Alert.alert('Enter all the details')
    }
  }
  const headersObj = {
    'Content-Type': 'application/json'
  }

  const dataObj = {
    name: data.communityName,
    abbreviation: data.communityName,
    about: data.description,
    logoUrl: 'logo',
    website: data.websiteRef,
    communityTypes: data.communityType,
    userId: 1
  }

  const createCommunity = () => {
    try {
      axios.post('https://qa-community-services.whitecoats.com/api/community-management/v1/communities',
        dataObj, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

        .then(function (res) {
          console.log("ResponseCheck", res.data.status);
          const msg = res.data.status;
          Utils.isLoadCommunityList = true;
          Utils.isLoadCommListInCommunityScreen=true;
          Alert.alert('Community created successfully')
          setLoading(false)
        })
        .catch(function (error) {
          console.log("ResponseCheck", error);
          setLoading(false)
          setError(e)
        });

    } catch (e) {
      Alert.alert(e);
      setLoading(false)
      setError(e)

    }

  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>An error occurred</Text>
      </View>
    );
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
            <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#ffffff', verticalAlign: 'middle', marginStart: 16 }}>
              Create Community
            </Text>
          </View>
          {/* <View style={styles.rightContainer} >
            <Image style={{ width: 25, height: 25, marginEnd: 16, tintColor: "#ffffff" }} source={serachIcon} />
            <Image style={{ width: 25, height: 25 }} source={notifIcon} />
          </View> */}
        </View>
        <View style={innerStyles.container}>
          <Text style={{ fontSize: 18, color: 'black', justifyContent: 'center', alignSelf: 'center', padding: 8 }}>
            Community Details
          </Text>
          <View>
            <TextInput
              style={innerStyles.input}
              placeholder="Enter Community Name"
              onChangeText={(val) => {
                textInputChange(val, 'CommunityName')
              }}
              onEndEditing={(e) => { handleValidation(e.nativeEvent.text, 'CommunityName') }}
            />
            {
              data.isCommunityNameEmpty ? null : <Text style={innerStyles.error}>Community Name should not be empty</Text>
            }
            <TextInput
              style={innerStyles.input}
              placeholder="Description"
              onChangeText={(val) => {
                textInputChange(val, 'Description')
              }}
              onEndEditing={(e) => { handleValidation(e.nativeEvent.text, 'Description') }}
            />
            {
              data.isDescription ? null : <Text style={innerStyles.error}>Description should not be empty</Text>
            }
            <TextInput
              style={innerStyles.input}
              placeholder="Website Reference"
              onChangeText={(val) => {
                textInputChange(val, 'websiteRef')
              }}
              onEndEditing={(e) => { handleValidation(e.nativeEvent.text, 'websiteRef') }}
            />
            {
              data.isWebsiteRef ? null : <Text style={innerStyles.error}>Website Reference Name should not be empty</Text>
            }
            {/* <TextInput
              style={innerStyles.input}
              placeholder="Community Type"
              onChangeText={(val) => {
                textInputChange(val, 'communityType')
              }}
              onEndEditing={(e) => { handleValidation(e.nativeEvent.text, 'communityType') }}
            />
            {
              data.isCommunityType ? null : <Text style={innerStyles.error}>Community Type should not be empty</Text>
            } */}
            <View>
              <DropDownPicker
                placeholder='Select Community Type'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={(val) => {
                  data.communityType = val
                }}
              />
            </View>
            <TouchableOpacity style={innerStyles.button}
              onPress={handleSubmit}
            >
              <Text style={innerStyles.butonText}>Submit</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{ position: 'absolute', top: "40%", right: 0, left: 0 }}>
          <ActivityIndicator animating={loading} size="large" color="green" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCommunity;

const innerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 16,
    flex: 1
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 18
  },
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    margin: 12,
    backgroundColor: Colors.primary500
  },
  butonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 12
  }
});