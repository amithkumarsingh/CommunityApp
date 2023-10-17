import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator,Alert } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import axios from 'axios';

import Api from '../components/contants/Api';
import Utils from '../components/contants/Utils'


const CustomDrawer = (props) => {
    const [commList, setCommList] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const profileIcon = require('./ImageAssets/profileIcon.png');
    const createComm = require('./ImageAssets/plus.png');
    const communityIcon = require('./ImageAssets/community3.png');
    const star = require('./ImageAssets/star.png')


    // useEffect(() => {
    //     const fetchCommList = async () => {
    //         if (Utils.isLoadCommunityList) {
    //             try {
    //                 const response = await axios.get(
    //                     Api.getCommunityList);
    //                 setCommList(response.data.data);
    //                 setIsLoading(false);
    //                 Utils.isLoadCommunityList = false;
    //             } catch (e) {
    //                 setError(e);
    //                 setIsLoading(false)
    //                 Utils.isLoadCommunityList = true;
    //             }
    //         }
    //     }
    //     fetchCommList();

    // });
    // if (isLoading) {
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <ActivityIndicator />
    //         </View>
    //     );
    // }

    // if (error) {
    //     return (
    //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //             <Text>An error occurred</Text>
    //         </View>
    //     );
    // }
    // const renderItem = ({ item }) => {
    //     return (
    //         <View>
    //             <View style={{ flexDirection: 'row', margin: 12, }}>
    //                 <Image style={{ width: 24, height: 24, alignSelf: 'center', margin: 6, }}
    //                     source={communityIcon} />
    //                 <Text style={{ color: 'gray', fontSize: 16, flex: 3, marginTop: 5 }}>{item.name}</Text>
    //                 <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
    //                     <Image style={{ width: 24, height: 24, marginEnd: 18, alignSelf: 'flex-end' }}
    //                         source={star} />
    //                 </View>

    //             </View>
    //             <View style={styles.hairline}></View>
    //         </View>
    //     )
    // }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#fff' }}>
                <View style={{ margin: 24 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            source={profileIcon}
                            style={{ height: 50, width: 50, borderRadius: 40, padding: 16 }} />
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingLeft: 16 }}>
                            <Text style={{ color: 'black', fontSize: 18 }}>Hello,</Text>
                            <Text style={{ color: 'black', fontSize: 16 }}>Mr. Amith Singh</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ color: 'gray', fontSize: 18, margin: 12 }}>Your Communities</Text>
                <View style={styles.communityNameView}>
                    <Image source={createComm}></Image>
                    <Text style={{ color: 'gray', fontSize: 18, marginStart: 6 }}
                        onPress={() => { props.navigation.navigate('CreateCommunity') }}>Create Community</Text>
                </View>
                <View style={[styles.hairline]}></View>

                {/* <FlatList
                    data={commList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} /> */}

            </DrawerContentScrollView>

        </View>
    );
}
export default CustomDrawer

const styles = StyleSheet.create({
    communityNameView: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
        margin: 8
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    createComm: {
        flex: 2,
        flexDirection: 'row'
    }
})