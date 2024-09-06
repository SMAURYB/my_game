import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { categories } from '../assets/Categories'; // Ajusta la ruta según sea necesario
import styles from '../assets/styles'; // Ajusta la ruta según sea necesario

function PlayScreen({ route }) {
  const { team1, team2, selectedPhrases, selectedCategory } = route.params;

  // Obtener las frases de la categoría seleccionada
  const phrases = categories[selectedCategory];

  // Función para mezclar las frases usando Fisher-Yates
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Mezclar las frases
  shuffleArray(phrases);

  // Limitar las frases según el número seleccionado
  const limitedPhrases = phrases.slice(0, selectedPhrases);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [usedPhrases, setUsedPhrases] = useState([]);

  // Mostrar la frase actual
  let currentPhrase = limitedPhrases[currentIndex];

  // Verificar y manejar repeticiones
  const getNextPhrase = () => {
    let nextPhrase = limitedPhrases[currentIndex];
    while (usedPhrases.includes(nextPhrase) && usedPhrases.length < limitedPhrases.length) {
      const newIndex = Math.floor(Math.random() * limitedPhrases.length);
      nextPhrase = limitedPhrases[newIndex];
    }
    setUsedPhrases([...usedPhrases, nextPhrase]);
    return nextPhrase;
  };

  // Función para pasar a la siguiente frase
  const handleNextPhrase = () => {
    if (usedPhrases.length < limitedPhrases.length) {
      const nextPhrase = getNextPhrase();
      setCurrentIndex(currentIndex + 1);
      currentPhrase = nextPhrase;
    } else {
      // Aquí puedes manejar el caso cuando no hay más frases
      alert('No hay más frases.');
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Team 1: {team1}</Text>
          <Text style={styles.infoText}>Team 2: {team2}</Text>
          <Text style={styles.infoText}>Frases a jugar: {selectedPhrases}</Text>
          <Text style={styles.infoText}>Categoría: {selectedCategory}</Text>
        </View>
        <Text style={styles.word}>{currentPhrase}</Text>
        <View style={styles.gameButtonContainer}>
          <TouchableOpacity style={styles.customButton} onPress={() => {}}>
            <Text style={styles.buttonText}>Pausar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customButton} onPress={handleNextPhrase}>
            <Text style={styles.buttonText}>Siguiente palabra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default PlayScreen;
