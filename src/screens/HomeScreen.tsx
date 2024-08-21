import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Profile from '../components/Profile';
import userData from '../Constants/Users.json';

interface User {
  id: string;
  profileImage: string;
  name: string;
  flag: string;
  role: string;
}

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(userData.users);
  const [selectedRole, setSelectedRole] = useState<string>('');

  const numColumns = 4;
  const screenWidth = Dimensions.get('window').width;
  const itemSize = screenWidth / numColumns - 16; // Subtracting 16 for padding/margin

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterUsers(query, selectedRole);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    filterUsers(searchQuery, role);
  };

  const filterUsers = (query: string, role: string) => {
    const filtered = userData.users.filter(
      user =>
        user.name.toLowerCase().includes(query.toLowerCase()) &&
        (role === '' || user.role === role),
    );
    setFilteredUsers(filtered);
  };

  return (
    <View style={styles.container}>
      <Header onRoleSelect={handleRoleSelect} />
      <View style={{paddingHorizontal: 16}}>
        <SearchBar
          profileImage={''}
          name={''}
          flag={''}
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <FlatList
          data={filteredUsers}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={[styles.item, {width: itemSize}]}>
              <Profile
                profileImage={item.profileImage}
                name={item.name}
                flag={item.flag}
              />
            </View>
          )}
          numColumns={numColumns}
          contentContainerStyle={styles.list}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  list: {
    paddingBottom: 60,
  },
  item: {
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
