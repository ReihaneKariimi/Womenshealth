import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>صفحه ورود</Text>
        <Text style={styles.description}>
          برای دریافت کد تایید شماره تلفنت رو وارد کن.
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+98</Text>
          <TextInput
            style={styles.input}
            placeholder="شماره تلفن"
            keyboardType="phone-pad"
            placeholderTextColor="#B0B0B0"
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Verification')} // انتقال به صفحه تأیید
      >
        <Text style={styles.buttonText}>→ادامه </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF', // رنگ پس‌زمینه
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
    color: '#FFFFFF', // رنگ سفید برای متن
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#8E8E93',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  countryCode: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#436FF2', // رنگ آبی برای دکمه
    paddingVertical: 12,
    paddingHorizontal: 120,
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
