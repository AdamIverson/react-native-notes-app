import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({ note }) => {
  return (
    <View>
      <Text>{note}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({})