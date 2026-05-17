import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // Fungsi Alert saat Kartu Gudang A ditekan
  const detailGudangA = () => {
    Alert.alert(
      "Detail Gudang A",
      "Kondisi: Aman\nKapasitas saat ini: 85%\nSisa slot penyimpanan masih tersedia untuk beban logistik baru.",
      [{ text: "Tutup", style: "cancel" }],
    );
  };

  // Fungsi Alert saat Kartu Gudang B ditekan
  const detailGudangB = () => {
    Alert.alert(
      "Peringatan Gudang B",
      "Kondisi: KRITIS!\nKapasitas saat ini: 95%\nSegera lakukan pengosongan atau pemindahan material!",
      [{ text: "Mengerti", style: "destructive" }],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header Utama Aplikasi */}
      <View style={styles.header}>
        <Text style={styles.title}>PT. Manufaktur Maju</Text>
        <Text style={styles.subtitle}>Aplikasi Monitoring Gudang</Text>
      </View>

      <Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>

      {/* KARTU GUDANG A (Bisa Ditekan) */}
      <TouchableOpacity
        style={styles.card}
        onPress={detailGudangA}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.gudangTitle}>Status Gudang A</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 85%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG B (Bisa Ditekan) */}
      <TouchableOpacity
        style={[styles.card, styles.cardAlert]}
        onPress={detailGudangB}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.gudangTitle}>Status Gudang B</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 95%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#e74c3c" }]}>PENUH</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "#2c3e50",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 14,
    color: "#bdc3c7",
    marginTop: 5,
  },
  welcomeText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardAlert: {
    borderLeftWidth: 5,
    borderLeftColor: "#e74c3c",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gudangTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  gudangKapasitas: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 4,
  },
  statusBadge: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
