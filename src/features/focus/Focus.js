import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Focus = () => (
  <View style={styles.container}>
    <Text>What would you like to focus on?</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
