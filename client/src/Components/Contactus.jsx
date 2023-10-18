import React from 'react';
import { Linking, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ContactUsPage = () => {
  
  const handleContactWhatsApp = () => {
    const url = 'https://wa.me/message/7ZH76ERKCEAAN1';
    
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', 'Unable to open WhatsApp on this device.');
        }
      })
      .catch(() => {
        Alert.alert('Error', 'An error occurred while opening WhatsApp.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <TouchableOpacity style={styles.formButton} onPress={handleContactWhatsApp}>
        <Text style={styles.buttonText}>OTHERS PAYMENTS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  formButton: {
    backgroundColor: '#0099ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'none',
  },
});

export default ContactUsPage;
