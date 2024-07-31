import React from 'react'
import Header from '../components/Header'
import FooterConponent from '../components/FooterConponent'
import { StyleSheet, View } from 'react-native'

const SignOutScreen = () => {
  return (
    <View style={styles.container}>
        <Header/>
        <FooterConponent/>

    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  }


})
export default SignOutScreen
