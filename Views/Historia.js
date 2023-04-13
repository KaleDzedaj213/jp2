import { createDrawerNavigator } from '@react-navigation/drawer';
import Wstep from './Historia/Wstep'
import Smierc from './Historia/Smierc'

const Drawer = createDrawerNavigator();

export default function Historia() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Wstęp" component={Wstep} />
            <Drawer.Screen name="Smierć" component={Smierc} />
        </Drawer.Navigator>
    );
}