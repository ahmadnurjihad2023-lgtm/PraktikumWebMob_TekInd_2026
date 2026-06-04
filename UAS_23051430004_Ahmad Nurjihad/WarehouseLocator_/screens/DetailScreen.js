import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailScreen({ route }) {
  const { itemData } = route.params;

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
          <Text style={styles.label}>Stok</Text>
          <Text style={styles.value}>{itemData.stok}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Lokasi Rak</Text>
          <Text style={styles.value}>{itemData.lokasiRak}</Text>
        </View>
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
});



