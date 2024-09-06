import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../assets/styles'; // Ajusta la ruta según sea necesario

function GameScreen({ navigation }) {
  const [team1, setTeam1] = React.useState('');
  const [team2, setTeam2] = React.useState('');
  const [selectedPhrases, setSelectedPhrases] = React.useState(5);
  const [selectedCategory, setSelectedCategory] = React.useState('Películas');
  const [selectedBuzzerSound, setSelectedBuzzerSound] = React.useState('Classic Buzzer');

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.inputTeamGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Team 1</Text>
            <TextInput
              style={styles.input}
              value={team1}
              onChangeText={setTeam1}
              placeholder="Team 1"
              placeholderTextColor="#fff000"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Team 2</Text>
            <TextInput
              style={styles.input}
              value={team2}
              onChangeText={setTeam2}
              placeholder="Team 2"
              placeholderTextColor="#fff000"
            />
          </View>
        </View>

        <View style={styles.inputPickerSelectorsGroup}>
          <View style={styles.inputPickerContainer}>
            <Text style={styles.label2} numberOfLines={1}>Jugar a:</Text>
            <Picker
              selectedValue={selectedPhrases}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedPhrases(itemValue)}
            >
              {Array.from({ length: 7 }, (_, i) => (
                <Picker.Item key={i} label={`${i + 8} frases`} value={i + 5} />
              ))}
            </Picker>
          </View>
          <View style={styles.inputPickerContainer}>
            <Text style={styles.label2}>Categorías:</Text>
            <Picker
              selectedValue={selectedCategory}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            >
              {['Películas', 'Sitios geográficos', 'Dichos'].map((category, index) => (
                <Picker.Item key={index} label={category} value={category} />
              ))}
            </Picker>
          </View>
          <View style={styles.inputPickerContainer}>
            <Text style={styles.label2}>Alarmas:</Text>
            <Picker
              selectedValue={selectedBuzzerSound}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedBuzzerSound(itemValue)}
            >
              {['Classic Buzzer', 'Electronic Beep', 'Horn Blast', 'Alarm Bell', 'Game Show Tone', 'Whistle', 'Ding Dong'].map((sound, index) => (
                <Picker.Item key={index} label={sound} value={sound} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.gameButtonContainer}>
          <TouchableOpacity style={styles.customButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate('Play', {
              team1,
              team2,
              selectedPhrases,
              selectedCategory,
            })}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

export default GameScreen;
