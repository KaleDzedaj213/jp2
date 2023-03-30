import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Historia from './Views/Historia';
import Kremowki from './Views/Kremowki';
import Start from "./Views/Start"

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Start" component={Start} />
            <Tab.Screen name="Kremówki" component={Kremowki} />
            <Tab.Screen name="Historia" component={Historia} />
        </Tab.Navigator>
    )
}