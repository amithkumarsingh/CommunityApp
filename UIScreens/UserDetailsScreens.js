import * as React from 'react';
import { Button, View, Text, SafeAreaView, TouchableOpacity, Image,StyleSheet } from 'react-native';
import styles from '../components/contants/GlobalStyles';
import Colors from '../components/contants/Colors';

const UserDetailsScreen = ({ route, navigation }) => {
    const serachIcon = require('./ImageAssets/search_inactive.png');
    const back = require('./ImageAssets/back.png');
const userDetails=route.params.userDetails;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.TopBar}>
                    <View style={styles.leftContainer}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack('Users')
                        }}>
                            <Image style={{ width: 30, height: 30, tintColor: 'white' }} source={back} />
                        </TouchableOpacity>
                        <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#ffffff', verticalAlign: 'middle', marginStart: 16 }}>
                            Users Details
                        </Text>
                    </View>
                </View>
                <View style={{ margin: 8, padding: 6 }}>
                    <Text style={innerStyles.textHeader}>Full Name :</Text>
                    <Text style={innerStyles.textValue}>{userDetails.firstName + " " + userDetails.lastName} </Text>
                    <Text style={innerStyles.textHeader}>Short Info :</Text>
                    <Text style={innerStyles.textValue}>{userDetails.about}</Text>
                    <Text style={innerStyles.textHeader}>Date Of Birth :</Text>
                    <Text style={innerStyles.textValue}>{userDetails.dob}</Text>
                    <Text style={innerStyles.textHeader}>Email Address :</Text>
                    <Text style={innerStyles.textValue}>{userDetails.email}</Text>
                    <Text style={innerStyles.textHeader}>Phone Number :</Text>
                    <Text style={innerStyles.textValue}>{userDetails.phone}</Text>
                    <Text style={innerStyles.textHeader}>Location :</Text>
                    <Text style={innerStyles.textValue}>{userDetails.location}</Text>
                   

                </View>
            </View>
        </SafeAreaView>
    );

}
export default UserDetailsScreen;

const innerStyles=StyleSheet.create({
    textHeader:{
fontSize:18,
color:'black',marginTop:6
    },
    textValue:{
        fontSize:20,
        color:Colors.blueColor,
        marginBottom:6
    }
});
