import { View, Text } from 'react-native'
import React, {useContext} from 'react';
import { UserContext } from '../../context/UserContext';

const UserList: React.FC = () => {  
  const {usersList} = useContext(UserContext) as UserContextType;

  return (
    <View>
      {usersList.map((user,index)=><Text key={index}>{user}</Text>)}
    </View>
  )
}

export default UserList