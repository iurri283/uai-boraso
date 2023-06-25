import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import {TelaStack} from './TelaStack'
import {TelaDrawer} from './TelaDrawer'

export function TelaTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="TelaStack"
          component={TelaStack}
          options={{ tabBarLabel: 'TelaStack' }}
        />
        <Tab.Screen
          name="TelaDrower"
          component={TelaDrawer}
          options={{ tabBarLabel: 'TelaDrower' }}
        />
      </Tab.Navigator>
  );
}