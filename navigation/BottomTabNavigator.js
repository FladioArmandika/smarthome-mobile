import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import DeviceListScreen from '../screens/DeviceListScreen';
import ExploreDeviceScreen from '../screens/ExploreDeviceScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (  
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={
        {style:{height:80,
          paddingBottom: 10,
          paddingTop:10, 
          // borderTopLeftRadius:20,
          // borderTopRightRadius:20
        }}
      }>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="DeviceList"
        component={DeviceListScreen}
        options={{
          title: 'Device List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-phone-portrait" />,
        }}
      />
      <BottomTab.Screen
        name="ExploreDevice"
        component={ExploreDeviceScreen}
        options={{
          title: 'Explore Device',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-wifi" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'DeviceList':
      return 'Device List';
    case 'ExploreDevice':
      return 'Explore Device';
    case 'Profile':
      return 'Profile';
  }
}
