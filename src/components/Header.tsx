import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image, Text, Pressable } from 'react-native';
import roleData from '../Constants/Roles.json';

interface Role {
  id: number;
  name: string;
  imageUrl: string;
}

interface HeaderProps {
  onRoleSelect: (role: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleFilter = (role: string) => {
    const newSelectedRole = selectedRole === role ? null : role;
    setSelectedRole(newSelectedRole);
    onRoleSelect(newSelectedRole || '');
  };

  const renderItem = ({ item }: { item: Role }) => {
    const isSelected = selectedRole === item.name;

    return (
      <Pressable
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => handleFilter(item.name)}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.textName}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={roleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0ebe5',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  item: {
    marginRight: 10,
    alignItems: 'center',
  },
  selectedItem: {
    borderWidth:1,
    borderColor:'blue',
    borderRadius:10,
    paddingLeft:2,
    paddingRight:2,
  },
  image: {
    marginTop: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },

  textName: {
    marginTop: 6,
    fontSize: 12,
    marginBottom: 6,
  },

});

export default Header;
