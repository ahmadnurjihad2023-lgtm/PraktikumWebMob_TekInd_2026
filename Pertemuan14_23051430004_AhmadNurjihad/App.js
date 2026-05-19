import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  // Fungsi alert dinamis untuk menampilkan status detail gudang saat ditekan
  const tampilkanDetailGudang = (namaGudang, kapasitas, status) => {
    Alert.alert(
      `Detail ${namaGudang}`,
      `Kapasitas Terpakai: ${kapasitas}\nStatus: ${status}\nSistem monitoring berjalan normal.`,
      [{ text: "Tutup", style: "cancel" }],
    );
  };

  return (
    // IMPLEMENTASI LATIHAN 2: ScrollView membungkus seluruh konten utama aplikasi
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <StatusBar barStyle="dark-content" />

      {/* Header Utama Aplikasi */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/407/407826.png",
          }}
          style={styles.companyLogo}
        />
        <View>
          <Text style={styles.title}>PT. Manufaktur Maju</Text>
          <Text style={styles.subtitle}>Aplikasi Monitoring Gudang</Text>
        </View>
      </View>

      <Text style={styles.welcomeText}>
        Selamat Datang, Operator! (Data Sektor A - Z)
      </Text>

      {/* KARTU GUDANG A */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang A", "85%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang A</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 85%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG B */}
      <TouchableOpacity
        style={[styles.card, styles.cardAlert]}
        onPress={() => tampilkanDetailGudang("Gudang B", "95%", "PENUH")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang B</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 95%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#e74c3c" }]}>PENUH</Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG C */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang C", "40%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang C</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 40%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG D */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang D", "60%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang D</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 60%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG E */}
      <TouchableOpacity
        style={[styles.card, styles.cardAlert]}
        onPress={() => tampilkanDetailGudang("Gudang E", "98%", "PENUH")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang E</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 98%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#e74c3c" }]}>PENUH</Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG F */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang F", "15%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang F</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 15%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG G */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang G", "70%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang G</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 70%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG H */}
      <TouchableOpacity
        style={[styles.card, styles.cardAlert]}
        onPress={() => tampilkanDetailGudang("Gudang H", "92%", "PENUH")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang H</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 92%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#e74c3c" }]}>PENUH</Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG I */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang I", "55%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang I</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 55%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG J */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang J", "30%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang J</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 30%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG K */}
      <TouchableOpacity
        style={[styles.card, styles.cardAlert]}
        onPress={() => tampilkanDetailGudang("Gudang K", "100%", "PENUH")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang K</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 100%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#e74c3c" }]}>PENUH</Text>
        </View>
      </TouchableOpacity>

      {/* KARTU GUDANG L */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => tampilkanDetailGudang("Gudang L", "45%", "TERSEDIA")}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.gudangTitle}>Status Gudang L</Text>
            <Text style={styles.gudangKapasitas}>Kapasitas: 45%</Text>
          </View>
          <Text style={[styles.statusBadge, { color: "#2ecc71" }]}>
            TERSEDIA
          </Text>
        </View>
      </TouchableOpacity>

      {/* FOOTER INFORMASI TAMBAHAN (Memastikan Scroll Jauh ke Bawah) */}
      <View style={styles.footerNote}>
        <Text style={styles.footerText}>-- Batas Akhir Data Logistik --</Text>
        <Text style={styles.footerSubtext}>
          Update Terakhir: Real-Time Kedatangan Unit
        </Text>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
  },
  companyLogo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 13,
    color: "#bdc3c7",
    marginTop: 3,
  },
  welcomeText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 22, // Diperbesar sedikit agar memakan ruang vertikal
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
  textContainer: {
    flex: 1,
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
  footerNote: {
    marginTop: 20,
    marginBottom: 60, // Margin bawah besar agar bisa di-scroll melewati batas layar dengan lega
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#7f8c8d",
    fontWeight: "bold",
  },
  footerSubtext: {
    fontSize: 12,
    color: "#95a5a6",
    marginTop: 5,
  },
});
