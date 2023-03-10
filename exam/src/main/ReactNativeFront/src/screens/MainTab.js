import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MyProfileStack from './MyProfileStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <SafeAreaProvider>
    <View style={styles.block}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#6200ee',
          }}
          initialRouteName="Feeds">
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
            }}
          />
          <Tab.Screen
            name="MyProfileStack"
            component={MyProfileStack}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="person" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      
      </NavigationContainer>
    </View>
    
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
});

export default MainTab;