import { Text, View, Image, StyleSheet } from 'react-native';

export default function Kremowki() {
    return (
        <View style={styles.main}>
            <Image
                style={styles.img}
                source={require('../assets/kremowka.png')}
            />
            <Text>Tak wygląda kremówka</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: "200px",
        height: "200px"
    }
});