import {
    StyleSheet,
    View,
    Text,
    Image, TouchableOpacity
} from 'react-native';
import Colors from '../components/contants/Colors';

const FeedDetailsScreen = ({ navigation, route }) => {

    const feedDetails = route.params.feedDetails;


    const profileIcon = require('./ImageAssets/ic_profile.png');
    const image = require('./ImageAssets/image.jpg');
    const share = require('./ImageAssets/ic_share.png');
    const like = require('./ImageAssets/ic_liked.png');
    const comment = require('./ImageAssets/ic_comment.png');
    const back = require('./ImageAssets/back.png');

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.TopBar}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image style={{ width: 30, height: 30, tintColor: 'white' }} source={back} />
                    </TouchableOpacity>
                    <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#ffffff', verticalAlign: 'middle', marginStart: 16 }}>
                        {feedDetails.title}
                    </Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', position: '' }}>
                    <Image style={{
                        width: 50, height: 50, backgroundColor: 'lightgreen',
                        borderRadius: 22, margin: 8
                    }} source={profileIcon} />
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 5 }}>
                        <Text style={{ color: '#009858', fontSize: 18, fontStyle: 'normal' }}>{feedDetails.title} </Text>
                        <>
                            {
                                feedDetails.createdBy === null ? null :
                                    feedDetails?.createdBy?.firstName !== null && feedDetails?.createdBy?.firstName !== "" ?
                                        <Text style={{ color: 'gray', fontSize: 14 }}>create by : {feedDetails.createdBy.firstName}</Text> :
                                        null
                            }
                        </>

                    </View>
                    {/* <Text style={{
                        justifyContent: 'flex-end', margin: 8, borderWidth: 1,
                        borderColor: "thistle",
                        borderRadius: 20, padding: 8, alignSelf: 'center', backgroundColor: 'lightblue',
                    }}
                    >Join</Text> */}
                </View>
                <View style={{ flexDirection: 'column', margin: 8 }}>
                    {
                        feedDetails.description !== null && feedDetails.description !== "" ?
                            <Text style={{ fontSize: 18, fontStyle: 'normal', fontWeight: 'bold' }}>{feedDetails.description}</Text>
                            :
                            null
                    }
                    {
                        feedDetails.shortDescription !== null && feedDetails.shortDescription !== "" ?
                            <Text style={{ color: 'gray', fontSize: 14, marginBottom: 12 }}>
                                {feedDetails.shortDescription}
                            </Text> :
                            null
                    }
                    <Image style={{ width: '100%', height: 200 }} source={image} />
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

                    <View style={{ margin: 16 }}>
                       
                        {
                                 feedDetails.createdBy === null ? null :
                                 <View>
                                 <Text style={{color:Colors.blueColor, borderColor: Colors.primary500, borderWidth: 2, borderRadius: 8, textAlign: 'center', padding: 5, fontWeight: 'bold', fontSize:22 }}>Created By Details:</Text>

                                 <View style={{ borderColor:'#ccc', borderWidth: 1, borderRadius: 8, padding: 16, marginTop:16 }}>
                            {
                                 feedDetails.createdBy === null ? null :
                                 feedDetails?.createdBy?.firstName !== null && feedDetails?.createdBy?.firstName !== "" ?
                                 <Text style={{ color: Colors.grayColor, fontSize: 18,alignSelf:'center' }}>Full Name:  {feedDetails.createdBy.firstName + ' ' + feedDetails.createdBy.lastName}</Text>
                                 :null
                            }
                                                        {
                                 feedDetails.createdBy === null ? null :
                                 feedDetails?.createdBy?.email !== null && feedDetails?.createdBy?.email !== "" ?
                                 <Text style={{ color: Colors.grayColor, fontSize: 18,alignSelf:'center' }}>Full Name:  {feedDetails.createdBy.email}</Text>
                                 :null
                            }
                                                        {
                                 feedDetails.createdBy === null ? null :
                                 feedDetails?.createdBy?.phone !== null && feedDetails?.createdBy?.phone !== "" ?
                                 <Text style={{ color: Colors.grayColor, fontSize: 18,alignSelf:'center' }}>Full Name:  {feedDetails.createdBy.phone}</Text>
                                 :null
                            }
                                                        {
                                 feedDetails.createdBy === null ? null :
                                 feedDetails?.createdBy?.about !== null && feedDetails?.createdBy?.about !== "" ?
                                 <Text style={{ color: Colors.grayColor, fontSize: 18,alignSelf:'center' }}>Full Name:  {feedDetails.createdBy.about}</Text>
                                 :null
                            }
                            </View>
                            </View>
                            }

                        <Text style={{backgroundColor:Colors.primary500,color:Colors.colorWhite, borderColor: Colors.primary500,
                             borderWidth: 2, borderRadius: 8, textAlign: 'center',
                              padding: 5, fontWeight: 'bold', fontSize:22,
                              marginTop:16 }}>Join Group</Text>


                    </View>
                </View>
            </View>

        </View>
    );

}

export default FeedDetailsScreen;
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