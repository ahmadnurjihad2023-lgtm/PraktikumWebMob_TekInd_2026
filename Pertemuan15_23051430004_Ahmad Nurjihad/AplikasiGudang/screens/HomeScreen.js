import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function HomeScreen({ navigation, route }) {
  // Data State Awal Item Inspeksi Gudang/Produksi
  const [items, setItems] = useState([
    { id: "1", nama: "Panel Listrik Utama", status: "Belum Diperiksa" },
    { id: "2", nama: "Kabel Power Motor 3 Phase", status: "Belum Diperiksa" },
    {
      id: "3",
      nama: "Pipa Hidrolik Tekanan Tinggi",
      status: "Belum Diperiksa",
    },
  ]);

  // Efek State Management untuk memantau parameter balikan dari halaman detail
  useEffect(() => {
    if (route.params?.updatedId && route.params?.updatedStatus) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === route.params.updatedId
            ? { ...item, status: route.params.updatedStatus }
            : item,
        ),
      );
    }
  }, [route.params?.updatedId, route.params?.updatedStatus]);

  const renderItem = ({ item }) => {
    // Penentuan warna teks dinamis berdasarkan status QC komponen
    let textColor = "#2c3e50"; // Default (Belum Diperiksa)
    if (item.status === "Lolos") textColor = "#27ae60"; // Hijau jika Lolos
    if (item.status === "Gagal") textColor = "#c0392b"; // MERAH JIKA GAGAL (Sesuai Soal Poin C)

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detail", { itemData: item })}
      >
        <Text style={[styles.itemNama, { color: textColor }]}>{item.nama}</Text>
        <Text style={[styles.itemStatus, { color: textColor }]}>
          Status: {item.status}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Perlu Inspeksi</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  itemNama: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemStatus: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "600",
  },
});

export default HomeScreen;
