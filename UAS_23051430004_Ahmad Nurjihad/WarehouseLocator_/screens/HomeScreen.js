import React, { useState } from "react";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { DATA_GUDANG } from "../data/warehouseData";

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  const filteredData = DATA_GUDANG.filter((item) =>
    item.namaBarang.toLowerCase().includes(search.toLowerCase())
  );

  if (isSorted) {
    filteredData.sort((a, b) => 
      a.namaBarang.localeCompare(
        b.namaBarang
      )
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Detail", { itemData: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.namaBarang}>{item.namaBarang}</Text>
        <View style={styles.stockBadge}>
          <Text style={styles.stockText}>Stok {item.stok}</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Kategori</Text>
        <Text style={styles.value}>{item.kategori}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Lokasi</Text>
        <Text style={styles.value}>{item.lokasiRak}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Warehouse Locator</Text>
      <Text style={styles.subtitle}>Temukan lokasi barang dengan cepat</Text>

      <TouchableOpacity
        style={styles.sortButton}
        onPress={() =>
          setIsSorted(!isSorted)
        }
      >

        <Text style={styles.sortButtonText}>
          {isSorted
            ? 'Urutan Awal'
          : 'Sort A-Z'}
        </Text>
      </TouchableOpacity>


      <TextInput
        style={styles.searchBar}
        placeholder="Cari nama barang..."
        placeholderTextColor="#9CA3AF"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
    marginBottom: 18,
  },

  searchBar: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
    borderRadius: 10,
    fontSize: 16,
    color: "#111827",
  },

  listContent: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#2563EB",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  namaBarang: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    flex: 1,
    marginRight: 10,
  },

  stockBadge: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  stockText: {
    color: "#1D4ED8",
    fontSize: 12,
    fontWeight: "bold",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  label: {
    fontSize: 14,
    color: "#6B7280",
  },

  value: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "600",
  },
  sortButton: {
    backgroundColor: '#2563EB',
    padding:12,
    borderRadius:10,
    marginBottom:15
  },
  sortButtongText :{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});