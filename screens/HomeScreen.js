import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/styles'; // Asegúrate de ajustar la ruta si es necesario

function HomeScreen({ navigation }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Phrase Frenzy</Text>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Game')}>
          <Text style={styles.playButtonText}>Play!</Text>
        </TouchableOpacity>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItemButton}>
            <Text style={styles.menuItem}>Instrucciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemButton}>
            <Text style={styles.menuItem}>Calificanos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
