import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Documents from './screens/Documents';
import Logger from './screens/Logger';
import Menu from './screens/Menu';

import TabComponent from './components/Tab';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarButton: (props) => <TabComponent {...props} label="home" />,
            }}
          />
          <Tab.Screen
            name="Logger"
            component={Logger}
            options={{
              tabBarButton: (props) => (
                <TabComponent {...props} label="logger" />
              ),
            }}
          />
          <Tab.Screen
            name="Documents"
            component={Documents}
            options={{
              tabBarButton: (props) => (
                <TabComponent {...props} label="documents" />
              ),
            }}
          />
          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              tabBarButton: (props) => <TabComponent {...props} label="menu" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
