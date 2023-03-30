import { createDrawerNavigator } from '@react-navigation/drawer';
import Poczatek from './Historia/Poczatek'

const Drawr = createDrawerNavigator();

export default function Drawer() {
    return (
        <Drawr.Navigator>
            <Drawer.Screen name="Początek" component={Poczatek} />
        </Drawr.Navigator>
    );
}