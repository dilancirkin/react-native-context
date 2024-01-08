import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {UserContext, UserContextType} from '../../context/UserContext';

const AddUser: React.FC = () => {
  const [name, setName] = useState("")
  const {usersList, setUsersList} = useContext(UserContext) as UserContextType;
  return (
    <View>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TouchableOpacity onPress={() => setUsersList([...usersList, name])}>
        <Text>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUser;
