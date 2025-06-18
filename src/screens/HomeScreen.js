import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

export default function HomeScreen({ navigation }) {  // navigation prop eklendi
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToFavorites } = useFavorites();

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error('API error:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('MealDetail', { meal: item })}  // Detay sayfasına git
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <Text style={styles.name}>{item.strMeal}</Text>
      <Button title="Add to Favorites" onPress={() => addToFavorites(item)} />
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.idMeal}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  card: {
    backgroundColor: '#f9f9f9',
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
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
