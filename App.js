import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabs } from './src/Navigation/HomeTabs';
import { enableLatestRenderer } from 'react-native-maps';


const App=()=>{
  enableLatestRenderer();
  return(
    <NavigationContainer>
      <HomeTabs/>
    </NavigationContainer>
  );
}
export default App;