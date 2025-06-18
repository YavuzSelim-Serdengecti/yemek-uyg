import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesScreen() {
  const { favorites } = useFavorites();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <Text style={styles.name}>{item.strMeal}</Text>
    </View>
  );

  if (favorites.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No favorites yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.idMeal}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  card: {
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
