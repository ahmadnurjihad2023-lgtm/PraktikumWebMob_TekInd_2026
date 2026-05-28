import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

function DetailScreen({ route, navigation }) {
  const { itemData } = route.params;
  const [status, setStatus] = useState(itemData.status);

  const simpanHasilQC = () => {
    // Mengirim kembali parameter ID dan Status baru ke rute asal (HomeScreen)
    navigation.navigate({
      name: "Home",
      params: { updatedId: itemData.id, updatedStatus: status },
      merge: true,
    });
    Alert.alert("Sistem QC", `Item berhasil ditandai sebagai: ${status}`);
  };

  return (
    <View style={styles.container}>
      {/* Bagian A: Foto Item & Standar Kualitas */}
      <View style={styles.card}>
        <Image
          source={{ uri: "http://unycommunity.com/wp-content/uploads/2022/06/istockphoto-1207928554-612x612-1.jpg" }}
          style={styles.image}
        />
        <Text style={styles.label}>Nama Komponen:</Text>
        <Text style={styles.value}>{itemData.nama}</Text>

        <Text style={styles.label}>Kriteria Standar Mutu:</Text>
        <Text style={styles.standarText}>
          • Struktur fisik solid tanpa keretakan/deformasi{"\n"}• Nilai hambatan
          isolasi internal {`>`} 50 MΩ{"\n"}• Lulus uji fungsional beban statis
          selama 10 menit
        </Text>
      </View>

      {/* Bagian B: Simulasi Seleksi Pilihan Status Inspeksi */}
      <Text style={styles.labelPilih}>Pilih Status Hasil Inspeksi:</Text>
      <View style={styles.pickerContainer}>
        <TouchableOpacity
          style={[styles.btnStatus, status === "Lolos" && styles.btnLolosAktif]}
          onPress={() => setStatus("Lolos")}
        >
          <Text
            style={[styles.btnText, status === "Lolos" && styles.textPutih]}
          >
            LOLOS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnStatus, status === "Gagal" && styles.btnGagalAktif]}
          onPress={() => setStatus("Gagal")}
        >
          <Text
            style={[styles.btnText, status === "Gagal" && styles.textPutih]}
          >
            GAGAL
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Eksekusi Aksi */}
      <TouchableOpacity style={styles.btnSimpan} onPress={simpanHasilQC}>
        <Text style={styles.btnSimpanText}>Simpan & Perbarui Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: "#7f8c8d",
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  standarText: {
    fontSize: 14,
    color: "#34495e",
    marginTop: 5,
    lineHeight: 22,
  },
  labelPilih: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  btnStatus: {
    flex: 1,
    padding: 15,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 8,
  },
  btnLolosAktif: {
    backgroundColor: "#27ae60",
  },
  btnGagalAktif: {
    backgroundColor: "#c0392b",
  },
  btnText: {
    fontWeight: "bold",
    color: "#555",
  },
  textPutih: {
    color: "#fff",
  },
  btnSimpan: {
    backgroundColor: "#2980b9",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  btnSimpanText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default DetailScreen;
