import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './FeedScreen';
import {NavigationContainer} from '@react-navigation/native';
import UploadScreen from './UploadScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{title: '새 게시물', headerBackTitle: '뒤로가기'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
