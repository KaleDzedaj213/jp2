import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Historia from './Views/Historia';
import Kremowki from './Views/Kremowki';
import Start from "./Views/Start"

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Start" component={Start} />
      <Tab.Screen name="Kremówki" component={Kremowki} />
      <Tab.Screen name="Historia" component={Historia} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}