import { Feather } from '@expo/vector-icons'; // Dùng icon từ thư viện đã cài
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BusinessCard() {
  const name = "Nguyễn Quốc Vượng";
  const jobTitle = "Thất nghiệp";
  const email = "nguyenquocvuong@email.com";
  const phoneNumber = "0987 654 321";

  const handlePressEmail = () => Linking.openURL(`mailto:${email}`);
  const handlePressPhone = () => Linking.openURL(`tel:${phoneNumber}`);

  return (
    <View style={styles.card}>
      {/* Phần ảnh đại diện và tên */}
      <Image
        source={require('../assets/images/avatar.png')} // Đường dẫn đến ảnh của bạn
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.jobText}>{jobTitle}</Text>

      {/* Đường kẻ phân cách */}
      <View style={styles.divider} />

      {/* Phần thông tin liên hệ */}
      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactRow} onPress={handlePressEmail}>
          <Feather name="mail" size={20} color="#4A90E2" />
          <Text style={styles.contactText}>{email}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactRow} onPress={handlePressPhone}>
          <Feather name="phone" size={20} color="#4A90E2" />
          <Text style={styles.contactText}>{phoneNumber}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// StyleSheet để định dạng giao diện
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20, // Bo góc
    padding: 25,
    margin: 20,
    alignItems: 'center', // Căn giữa các phần tử theo chiều ngang
    // --- Hiệu ứng đổ bóng cho iOS ---
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // --- Hiệu ứng đổ bóng cho Android ---
    elevation: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Bo tròn ảnh thành hình tròn
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#4A90E2', // Thêm viền cho ảnh
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins_600SemiBold', // Sử dụng font đã cài
  },
  jobText: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
    fontFamily: 'Poppins_400Regular',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '90%',
    marginVertical: 20, // Khoảng cách trên và dưới
  },
  contactContainer: {
    width: '100%',
  },
  contactRow: {
    flexDirection: 'row', // Sắp xếp icon và chữ theo hàng ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 15, // Khoảng cách giữa icon và chữ
    fontSize: 16,
    color: '#555',
    fontFamily: 'Poppins_400Regular',
  },
});