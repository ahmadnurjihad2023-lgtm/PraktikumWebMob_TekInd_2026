import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function DetailScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Detail Barang
            </Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
});