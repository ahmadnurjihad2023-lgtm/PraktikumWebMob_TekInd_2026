import React, { useState } from "react"; // 1. SUDAH DIPERBAIKI: useState dipanggil
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native"; // 1. SUDAH DIPERBAIKI: Alert dipanggil

function DetailScreen({ route, navigation }) {
  // Menerima data yang dikirim dari HomeScreen
  const { itemData } = route.params;

  // buat pelacak stok
  const [stok, setStok] = useState(itemData.stok);

  // fungsi mengurangi stok (dibatasi jangan sampai minus dari 0)
  const kurangStok = () => {
    if (stok > 0) setStok(stok - 1);
  };

  // fungsi menambah stok
  const tambahStok = () => {
    setStok(stok + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nama Barang:</Text>
        <Text style={styles.value}>{itemData.nama}</Text>
        
        <Text style={styles.label}>Stok Saat Ini:</Text>
        {/* 5. SUDAH DIPERBAIKI: Mengubah itemData.stok menjadi stok agar teks angka ikut berubah */}
        <Text
          style={[
            styles.value,
            stok < 20 ? styles.dangerText : styles.successText,
          ]}
        >
          {stok} Unit
        </Text>
        
        <Text style={styles.label}>Lokasi Penyimpanan:</Text>
        <Text style={styles.value}>{itemData.lokasi}</Text>

        {/* 4. SUDAH DIPERBAIKI: Format komentar JSX yang benar */}
        {/* tampilan tombol minus dan plus */}
        
        {/* 2. SUDAH DIPERBAIKI: Mengubah view & text menjadi Kapital (View & Text) */}
        <View style={styles.rowTombol}>
          <TouchableOpacity style={styles.btnKurang} onPress={kurangStok}>
            <Text style={styles.btnText}>- 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTambah} onPress={tambahStok}>
            <Text style={styles.btnText}>+ 1</Text>
          </TouchableOpacity>
        </View>

        {/* Logika tampilan tombol darurat */}
        {stok === 0 && (
          <TouchableOpacity 
            style={styles.btnDarurat}
            onPress={() => Alert.alert("Sistem Gudang", `Request stok darurat untuk ${itemData.nama} berhasil dikirim!`)}
          >
            <Text style={styles.btnDaruratText}>🚨 Request Stok Darurat</Text>
          </TouchableOpacity>
        )}

      </View>
      
      <Button title="Kembali ke Daftar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  dangerText: {
    color: "red",
  },
  successText: {
    color: "green",
  },
  // KODE TAMBAHAN UNTUK GAYA TOMBOL AGAR TIDAK EROR
  rowTombol: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btnKurang: {
    backgroundColor: "#7f8c8d",
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 5,
  },
  btnTambah: {
    backgroundColor: "#2980b9",
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnDarurat: {
    backgroundColor: "#c0392b",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  btnDaruratText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default DetailScreen;