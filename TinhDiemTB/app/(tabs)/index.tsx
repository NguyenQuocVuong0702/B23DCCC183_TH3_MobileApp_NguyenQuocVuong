import React from 'react';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import AverageScoreCalculator from '../../components/AverageScoreCalculator'; // Import component máy tính

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <AverageScoreCalculator />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center', 
  },
});