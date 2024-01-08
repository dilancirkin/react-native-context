import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({ navigation }: any) => {
    
 
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate("UserList")}>
        <Text>User List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("AddUser")}>
        <Text>Add User</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home