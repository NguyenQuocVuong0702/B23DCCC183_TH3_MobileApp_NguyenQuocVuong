import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AverageScoreCalculator() {
  // State để lưu điểm của từng môn
  const [mathScore, setMathScore] = useState('');
  const [physicsScore, setPhysicsScore] = useState('');
  const [chemistryScore, setChemistryScore] = useState('');

  // State để lưu kết quả điểm trung bình
  const [averageScore, setAverageScore] = useState<number | null>(null);

  // Hàm xử lý khi nhấn nút "Tính điểm"
  const handleCalculate = () => {
    // Ẩn bàn phím khi nhấn nút
    Keyboard.dismiss();

    // Chuyển đổi điểm từ dạng chuỗi sang số
    const math = parseFloat(mathScore);
    const physics = parseFloat(physicsScore);
    const chemistry = parseFloat(chemistryScore);

    // --- Validation (Kiểm tra dữ liệu đầu vào) ---
    if (isNaN(math) || isNaN(physics) || isNaN(chemistry)) {
      Alert.alert("Lỗi", "Vui lòng nhập đủ điểm cho cả 3 môn.");
      return;
    }
    if (math < 0 || math > 10 || physics < 0 || physics > 10 || chemistry < 0 || chemistry > 10) {
      Alert.alert("Lỗi", "Điểm số phải nằm trong khoảng từ 0 đến 10.");
      return;
    }

    // Tính điểm trung bình và cập nhật state
    const average = (math + physics + chemistry) / 3;
    setAverageScore(average);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Tính Điểm Trung Bình</Text>

      {/* Ô nhập điểm Toán */}
      <TextInput
        style={styles.input}
        placeholder="Nhập điểm Toán"
        placeholderTextColor="#999"
        keyboardType="numeric" // Chỉ cho phép nhập số
        value={mathScore}
        onChangeText={setMathScore}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập điểm Lý"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={physicsScore}
        onChangeText={setPhysicsScore}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập điểm Hóa"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={chemistryScore}
        onChangeText={setChemistryScore}
      />

      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Tính Điểm</Text>
      </TouchableOpacity>

      {averageScore !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Điểm trung bình của bạn là:</Text>
          <Text style={styles.resultScore}>{averageScore.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 25,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
  },
  resultScore: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007BFF',
    marginTop: 5,
  },
});