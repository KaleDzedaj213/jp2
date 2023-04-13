import { Text, View, Image, StyleSheet } from 'react-native';

export default function Wstep() {
    return (
        <View style={styles.main}>
            <Image
                style={styles.img}
                source={require('../../assets/jp2.jpg')}
            />
            <Text>Historia Jana Pawła II</Text>
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
        width: "299px",
        height: "476px"
    }
});