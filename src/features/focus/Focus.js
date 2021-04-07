import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../Components/RoundedButton';

export const Focus = () => {
  const { container, titleContainer, title, inputContainer } = styles;

  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={title}>What would you like to focus on?</Text>
        <View style={inputContainer}>
          <TextInput />
          <RoundedButton title="+" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    paddingTop: 20,
  },
});
