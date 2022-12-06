import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const AddNote = ({ onSave }) => {
  const [enteredText, setEnteredText] = useState("");
  const handleChange = (val) => {
    setEnteredText(val);
  };

  const handleClick = () => {
    if (enteredText.trim().length > 0) {
      onSave(enteredText);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add New Note</Text>
        <View>
          <TextInput onChangeText={handleChange} style={styles.input}/>
        </View>
        <Button onPress={handleClick} title="Create Note"/>
      </View>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "red",
    borderBottomWidth: "3px",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  }
})