import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";

function TambahScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formCard}>
        <Text style={styles.titleForm}>Input Material Baru</Text>

        {/* Input Nama Barang */}
        <Text style={styles.labelInput}>Nama Item</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Contoh: Modul PLC FX3U"
        />

        {/* Input Kategori */}
        <Text style={styles.labelInput}>Kategori Material</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Contoh: Otomasi / Elektrik"
        />

        {/* Input Kuantitas Awal */}
        <Text style={styles.labelInput}>Kuantitas Awal</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Contoh: 10"
          keyboardType="numeric"
        />

        {/* Input Lokasi */}
        <Text style={styles.labelInput}>Alokasi Rak</Text>
        <TextInput style={styles.textInput} placeholder="Contoh: Rak D-3" />

        {/* Tombol Simpan */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            Alert.alert(
              "Sistem Gudang",
              "Data master barang baru berhasil disimpan ke sistem.",
            );
            navigation.goBack(); // Otomatis kembali ke halaman daftar utama (HomeScreen)
          }}
        >
          <Text style={styles.submitButtonText}>Simpan ke Gudang</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    padding: 20,
  },
  formCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  titleForm: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 10,
  },
  labelInput: {
    fontSize: 13,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },
  submitButton: {
    backgroundColor: "#27ae60",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TambahScreen;
