import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Data Mock Inventori
const DATA_INVENTORI = [
  { id: "1", nama: "Baut M10", stok: 500, lokasi: "Rak A-1" },
  { id: "2", nama: "Oli Mesin 20L", stok: 12, lokasi: "Rak B-3" },
  { id: "3", nama: "Packing Kayu", stok: 100, lokasi: "Gudang Luar" },
  { id: "4", nama: "Mur Ring 12", stok: 0, lokasi: "Rak A-2" }, // Stok Habis
];

function HomeScreen({ navigation }) {
  // Fungsi Render Item untuk FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate("Detail", { itemData: item })}
    >
      <Text style={styles.itemTitle}>{item.nama}</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.itemSub}>Stok: {item.stok}</Text>
        <Text style={styles.itemSub}>{item.lokasi}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Inventori Gudang</Text>
      <FlatList
        data={DATA_INVENTORI}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // TAMBAHAN: Memberikan jarak di bawah agar item terakhir tidak tertutup FAB
        contentContainerStyle={{ paddingBottom: 90 }} 
      />

      {/* =================================================================== */}
      {/* 1. KODE TAMBAHAN LATIHAN 2: TOMBOL MENGAMBANG (FAB)                 */}
      {/* =================================================================== */}
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => navigation.navigate("Tambah")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      {/* =================================================================== */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  itemContainer: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  itemSub: {
    color: "#666",
  },
  
  // ===================================================================
  // 2. KODE TAMBAHAN STYLING UNTUK FAB (TOMBOL BULAT)
  // ===================================================================
  fabButton: {
    position: "absolute",       // Membuat tombol melayang di atas konten lain
    bottom: 25,                 // Jarak dari bawah layar
    right: 25,                  // Jarak dari kanan layar
    backgroundColor: "#2980b9",   // Warna biru industri
    width: 60,                  // Ukuran lingkaran lebar
    height: 60,                 // Ukuran lingkaran tinggi
    borderRadius: 30,           // Setengah ukuran lebar/tinggi agar bulat sempurna
    justifyContent: "center",    // Posisi teks "+" center vertikal
    alignItems: "center",        // Posisi teks "+" center horizontal
    elevation: 5,               // Bayangan di Android
    shadowColor: "#000",        // Bayangan di iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fabText: {
    color: "#fff",              // Warna tanda + putih
    fontSize: 30,               // Ukuran tanda + besar
    fontWeight: "bold",
    lineHeight: 32,             // Menjaga teks tepat di tengah lingkaran
  },
});

export default HomeScreen;