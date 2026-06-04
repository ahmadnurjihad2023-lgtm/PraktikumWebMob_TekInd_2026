import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native';

export default function HomeScreen () {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Warehouse Locator
            </Text>

            <Text style={styles.subtitle}>
                Sistem Pencarian Barang Gudang
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    subtitle: {
        fontSize: 16,
        marginTop: 10
    }
});