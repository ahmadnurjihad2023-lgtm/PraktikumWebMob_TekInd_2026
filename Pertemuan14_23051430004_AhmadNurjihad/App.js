import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  // Data Inventaris Mesin Produksi (Ditambah menjadi 8 mesin agar konten melimpah dan bisa di-scroll)
  const dataMesin = [
    {
      id: 1,
      nama: "CNC Milling Machine X1",
      tahun: "2021",
      status: "Beroperasi",
      foto: "https://cdn-icons-png.flaticon.com/512/2210/2210518.png",
    },
    {
      id: 2,
      nama: "Hydraulic Press H-200",
      tahun: "2019",
      status: "Pemeliharaan",
      foto: "https://cdn-icons-png.flaticon.com/512/3630/3630650.png",
    },
    {
      id: 3,
      nama: "Robotic Arm Welder V.4",
      tahun: "2022",
      status: "Beroperasi",
      foto: "https://cdn-icons-png.flaticon.com/512/1913/1913160.png",
    },
    {
      id: 4,
      nama: "Conveyor Belt System S3",
      tahun: "2018",
      status: "Beroperasi",
      foto: "https://cdn-icons-png.flaticon.com/512/2996/2996683.png",
    },
    {
      id: 5,
      nama: "Lathe Machine Heavy Duty",
      tahun: "2020",
      status: "Beroperasi",
      foto: "https://cdn-icons-png.flaticon.com/512/2210/2210493.png",
    },
    {
      id: 6,
      nama: "Laser Cutter Precision L5",
      tahun: "2023",
      status: "Pemeliharaan",
      foto: "https://cdn-icons-png.flaticon.com/512/3201/3201509.png",
    },
    {
      id: 7,
      nama: "Injection Molding M40",
      tahun: "2017",
      status: "Beroperasi",
      foto: "https://cdn-icons-png.flaticon.com/512/2996/2996719.png",
    },
    {
      id: 8,
      nama: "Air Compressor Industrial",
      tahun: "2022",
      status: "Beroperasi",
      foto: "https://cdn-icons-png.flaticon.com/512/3630/3630607.png",
    },
  ];

  const detailMesin = (nama) => {
    Alert.alert(
      "Log Harian Mesin",
      `Membuka riwayat maintenance dan performa operasional untuk ${nama}`,
    );
  };

  return (
    // ScrollView membungkus seluruh konten agar halaman bisa digulir vertikal
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
      <StatusBar barStyle="light-content" />

      {/* Header Perusahaan */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PROFIL MESIN PRODUKSI</Text>
        <Text style={styles.headerSubtitle}>PT. MANUFAKTUR MAJU</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          Daftar Inventaris Mesin (Real-Time)
        </Text>

        {/* Pemetaan Data Mesin */}
        {dataMesin.map((mesin) => (
          <TouchableOpacity
            key={mesin.id}
            style={styles.profileCard}
            onPress={() => detailMesin(mesin.nama)}
            activeOpacity={0.7}
          >
            {/* BAGIAN KIRI: Foto Mesin Placeholder */}
            <Image source={{ uri: mesin.foto }} style={styles.machineImage} />

            {/* BAGIAN KANAN: Detail Informasi Teks */}
            <View style={styles.infoContainer}>
              <Text style={styles.machineName}>{mesin.nama}</Text>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Tahun:</Text>
                <Text style={styles.value}>{mesin.tahun}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Status:</Text>
                <Text
                  style={[
                    styles.statusBadge,
                    {
                      backgroundColor:
                        mesin.status === "Beroperasi" ? "#2ecc71" : "#f1c40f",
                    },
                  ]}
                >
                  {mesin.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer Tambahan dengan Margin Besar Bawah agar jarak scroll terlihat lega */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          -- Batas Akhir Profil Inventaris Aset --
        </Text>
        <Text style={styles.footerSubtext}>
          Sistem Monitoring Mobile | Ahmad Nurjihad
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  header: {
    backgroundColor: "#2c3e50",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  headerSubtitle: {
    color: "#bdc3c7",
    fontSize: 12,
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#34495e",
    marginBottom: 15,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // IMPLEMENTASI FLEXBOX: Menyusun foto di kiri dan teks di kanan
    flexDirection: "row",
    alignItems: "center",
  },
  machineImage: {
    width: 85,
    height: 85,
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  machineName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 6,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#7f8c8d",
    width: 50,
  },
  value: {
    fontSize: 12,
    fontWeight: "600",
    color: "#34495e",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    overflow: "hidden",
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 60, // Memberi batas ruang bawah yang lapang untuk menandakan halaman sukses di-scroll
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#7f8c8d",
    fontWeight: "600",
  },
  footerSubtext: {
    fontSize: 11,
    color: "#95a5a6",
    marginTop: 4,
  },
});
