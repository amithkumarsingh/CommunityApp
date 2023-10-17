import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './UIScreens/ProfileScreen'
import HomeScreen from './UIScreens/HomeScreen';
import { Image } from 'react-native'
import CommunitiesScreen from './UIScreens/CommunitiesScreen';
import CreateCommunity from './UIScreens/CreateCommunity';
import ChatScreen from './UIScreens/ChatScreen';
import UserScreen from './UIScreens/UsersScreen';
import CustomDrawer from './UIScreens/CustomDrawer';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar,Dimensions } from 'react-native';
import UserDetailsScreen from './UIScreens/UserDetailsScreens';
import FeedDetailsScreen from './UIScreens/FeedDetailsScreen';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerTitle:"sfsff",
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  require('./UIScreens/ImageAssets/home.png')
                }
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 3,
                  tintColor: focused ? '#008000' : '#808080'
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CommunitiesScreen"
        component={CommunitiesScreen}
        options={{
          title: 'Communities Screen',
          tabBarLabel: 'Communities',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  require('./UIScreens/ImageAssets/community.png')
                }
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 3,
                  tintColor: focused ? '#008000' : '#808080'
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CreateCommunity"
        component={CreateCommunity}
        options={{
          title: 'Create Community Screen',
          tabBarLabel: 'Create',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  require('./UIScreens/ImageAssets/plus.png')
                }
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 3,
                  tintColor: focused ? '#008000' : '#808080'
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: 'Chat Screen',
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  require('./UIScreens/ImageAssets/chat.png')
                }
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 3,
                  tintColor: focused ? '#008000' : '#808080'
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Users"
        component={UserScreen}
        options={{
          title: 'Users Screen',
          tabBarLabel: 'Users',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={
                  require('./UIScreens/ImageAssets/bell.png')
                }
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 3,
                  tintColor: focused ? '#008000' : '#808080'
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
     {/* <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen}
     /> */}
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#009858'} />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#009858', //Set Header color
            },
            drawerStyle: {
              width: Dimensions.get('window').width / 1.1,
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitle:'Home'
          }}
          drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen
            name="HomeScreenStack"
            options={{
              drawerLabel: 'All Communities',
              title: 'Home Screen',
              headerShown:false,
            }}
            component={HomeScreenStack}
          />
          <Drawer.Screen
            name="UserDetailsScreen"
            options={{
              headerShown:false,
              swipeEnabled:false
            }}
            component={UserDetailsScreen}
          />
           <Drawer.Screen
            name="FeedDetailsScreen"
            options={{
              headerShown:false,
              swipeEnabled:false
            }}
            component={FeedDetailsScreen}
          />
        </Drawer.Navigator>


      </NavigationContainer>
    </SafeAreaProvider>

  );
};

export default App;