import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem';

const AllNotesScreen = ({ notes }) => {
  const renderItem = (itemData) => {
    return <ListItem note={itemData.item.note} />
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList data={notes} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  )
}

export default AllNotesScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  }
})