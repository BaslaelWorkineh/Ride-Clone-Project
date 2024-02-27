import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import logo from "./Images/ride.png"
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style=
        {{ width:100, height:100, resizeMod:'contain' }} 
        source={logo}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})