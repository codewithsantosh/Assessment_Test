import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
interface SearchBarProps {
  profileImage: string;
  name: string;
  flag: string;
  onChangeText: (text: string) => void;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faSearch} style={styles.icon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          placeholderTextColor="#888"
          onChangeText={onChangeText}
          value={value}
        />
        <FontAwesomeIcon icon={faMicrophone} style={styles.icon} />
      </View>
      <View style={styles.filter}>
        <FontAwesomeIcon icon={faSlidersH} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '85%',
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#000',
  },
  filter: {
    width: 42,
    height: 45,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#888',
    marginHorizontal: 5,
  },
});

export default SearchBar;
