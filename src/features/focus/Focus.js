import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../Components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);
  const { container, titleContainer, title, inputContainer } = styles;

  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={title}>What would you like to focus on?</Text>
        <View style={inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title='+'
            onPress={() => addSubject(tempItem)}
          />
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
    flexDirection: 'row',
    alignItems: 'center',
  },
});
