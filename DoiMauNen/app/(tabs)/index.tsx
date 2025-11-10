import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorChanger from '../../components/ColorChanger'; // Import component đổi màu

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ColorChanger />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});