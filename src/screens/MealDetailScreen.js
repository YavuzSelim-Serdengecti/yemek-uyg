import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function MealDetailScreen({ route }) {
  const { meal } = route.params;  // HomeScreen'den gelen veri

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <Text style={styles.category}>Category: {meal.strCategory}</Text>
      <Text style={styles.instructionsTitle}>Instructions:</Text>
      <Text style={styles.instructions}>{meal.strInstructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  instructionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'justify',
  },
});
