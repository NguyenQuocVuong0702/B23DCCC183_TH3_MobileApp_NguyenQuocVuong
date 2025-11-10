import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import BusinessCard from '../../components/BusinessCard'; // Import component vừa tạo

export default function HomeScreen() {
  // Hook để load phông chữ
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  // Nếu phông chữ chưa load xong, hiển thị màn hình chờ
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <BusinessCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5', // Một màu nền xám nhạt để làm nổi bật card
    justifyContent: 'center', // Căn giữa danh thiếp theo chiều dọc
    alignItems: 'center', // Căn giữa danh thiếp theo chiều ngang
  },
});