import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>سلامت زنان</Text>
        <Text style={styles.description}>
          رعایت بهداشت در قاعدگی علاوه‌ بر کمک به شما برای مدیریت درد موجب شادابی بدن و حفظ روحیه ناشی از نوسانات هورمونی در طول دوره پریودی خواهد شد.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Second')} // انتقال به صفحه جدید
      >
        <Text style={styles.buttonText}>→ شروع </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#436FF2',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#8E8E93',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#436FF2',
    paddingVertical: 12,
    paddingHorizontal: 145,
    borderRadius: 25,
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

