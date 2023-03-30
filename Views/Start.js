import { Text, View, Image, StyleSheet } from 'react-native';

export default function Start() {
    return (
        <View style={styles.main}>
            <Image
                style={styles.img}
                source={require('../assets/trollface.png')}
            />
            <Text>Among us!</Text>
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
        width: "220px",
        height: "183px"
    }
});