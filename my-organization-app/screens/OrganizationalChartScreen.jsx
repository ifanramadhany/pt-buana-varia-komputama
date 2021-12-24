import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function OrganizationalChartScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: 'red'}}>Ini adalah OrganizationalChart</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
