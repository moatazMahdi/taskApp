import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>Home Screen</Text>
    </SafeAreaView>
  )
}

export default HomeHeader