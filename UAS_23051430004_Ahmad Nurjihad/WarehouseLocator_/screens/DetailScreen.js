import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailScreen({
  route,
  navigation
}) {

  const { itemData } = route.params;
  const [stok, setStok] = useState(itemData.stok);
  const tambahStok = () => {
    setStok(stok + 1);
  };

  const kurangStok = () => {
    if (stok > 0) {
      setStok(stok - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detail Barang</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Nama Barang</Text>
          <Text style={styles.value}>{itemData.namaBarang}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Kategori</Text>
          <Text style={styles.value}>{itemData.kategori}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.stok}>Stok Saat Ini : {stok} </Text>
          
          {stok < 5 && (
            <Text style={styles.warning}>
              📉 Stok Kritis
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Lokasi Rak</Text>
          <Text style={styles.value}>{itemData.lokasiRak}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={kurangStok}
      >
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button}
        onPress={tambahStok}>

          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            Kembali
          </Text>

        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 24,
    textAlign: "center",
  },

  row: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2563EB",
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 4,
  },

  value: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },

  stok:{
    fontSize:18,
    fontWeight: 'bold',
    marginTop:10
  },

  warning:{
    color:'red',
    fontWeight:'bold',
    marginTop:10
  },

  buttonContainer:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginTop:20
  },

  button:{
    backgroundColor: '#007AFF',
    width: 70,
    height:70,
    borderRadius:35,
    justifyContent: 'center',
    alignItems:'center'
  },

  buttonText:{
    color:'white',
    fontSize : 28,
    fontWeight: 'bold'
  },

  backButton:{
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 10,
    marginTop: 20
  },

  backText:{
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold'
  }
});



