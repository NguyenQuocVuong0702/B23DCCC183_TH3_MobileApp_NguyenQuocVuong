import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ColorChanger() {
  // 1. Dùng state để lưu màu hiện tại, bắt đầu bằng màu trắng.
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  // 2. Hàm để tạo ra một mã màu HEX ngẫu nhiên
  const generateRandomColor = () => {
    const hexChars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // 3. Hàm xử lý khi nhấn nút
  const handleChangeColor = () => {
    const newColor = generateRandomColor();
    setBackgroundColor(newColor); // Cập nhật state, giao diện sẽ tự render lại
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Đổi màu nền</Text>
      
      {/* Khối màu sẽ thay đổi */}
      <View style={[styles.colorBox, { backgroundColor: backgroundColor }]}>
        <Text style={styles.colorCodeText}>{backgroundColor}</Text>
      </View>

      {/* Nút bấm để đổi màu */}
      <TouchableOpacity style={styles.button} onPress={handleChangeColor}>
        <Text style={styles.buttonText}>Đổi màu</Text>
      </TouchableOpacity>
    </View>
  );
}

// StyleSheet để định dạng giao diện
const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  colorBox: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  colorCodeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.3)', // Màu chữ hơi mờ để không bị chói
    textShadowColor: 'rgba(255, 255, 255, 0.75)', // Đổ bóng cho chữ để dễ đọc
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: '#28A745', // Màu xanh lá
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});