import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import DrawerNavigator from './navigations/drawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
   
  );
}