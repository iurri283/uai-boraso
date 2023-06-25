import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import { View } from 'react-native';
import { Tabmenu } from '../components/Tabmenu.js';

export function TelaDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Menu1">
        <Drawer.Screen 
          name="Menu1" 
          component={ () => <Tabmenu data={"Menu1"}/>} 
        />
        <Drawer.Screen 
          name="Menu2" 
          component={componenteTela} 
        />
         <Drawer.Screen 
          name="Menu3" 
          component={Tabmenu} 
         />
      </Drawer.Navigator>
  );
}

function componenteTela(){
  return(
    <View/>
  );
}