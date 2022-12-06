import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { ScreenType } from './constants/constants';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';
import BackButton from './components/BackButton';

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  let content;

  if (screen === ScreenType.addNote) {
    content = <AddNote onSave={(data)=>setNotes([...notes, {id: Date.now(), note: data}])}/>
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen notes={notes}/>
  } else if (screen === ScreenType.home) {
    content = (
      <HomeScreen onExit={(data) => { setScreen(data) }} />
    )
  }
  console.log("notes: ", notes);
  return (
    <View style={styles.container}>
      <Header />
      <BackButton onButtonClick={(data) => { setScreen(data) }}/>
      { content }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
