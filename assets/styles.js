// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 768 && height >= 1024;
const isLandscape = width > height;
const baseFontSize = 16;
const scaleFactor = isLandscape ? width / 600 : width / 375;

const calculateFontSize = (size) => Math.round(size * scaleFactor);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderColor: '#ff5733',
    borderWidth: 15,
    borderRadius: 36,
    padding: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    padding: isTablet ? 20 : 10,
    borderColor: '#0099ff',
    borderWidth: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff9',
  },
  title: {
    position: 'absolute',
    top: isLandscape ? 10 : 30,
    fontSize: calculateFontSize(32),
    padding: isTablet ? 36 : 26,
    fontFamily: 'ComicSansMS', // Asegúrate de cargar la fuente correctamente
    fontWeight: 'bold',
    borderRadius: 12,
    backgroundColor: '#ff5749',
    color: '#fff000',
    marginBottom: 30,
  },
  playButton: {
    backgroundColor: '#0014ff',
    paddingHorizontal: isTablet ? 50 : 30,
    paddingVertical: isTablet ? 20 : 10,
    marginBottom: 30,
    borderColor: '#f59000',
    borderWidth: 6,
    borderRadius: 13,
    width: isTablet ? '50%' : '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff000',
    fontFamily: 'ComicSansMS',
    fontSize: calculateFontSize(44),
    fontWeight: 'bold',
    paddingHorizontal: 9,
  },
  menu: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  menuItemButton: {
    padding: isTablet ? 18 : 8,
    width: isTablet ? '44%' : '42%',
    height: isTablet ? 140 : 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0014ff',
    borderRadius: 10,
    marginBottom: 20,
  },
  menuItem: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    fontWeight: 'bold',
    fontFamily: 'ComicSansMS',
  },
  inputPickerSelectorsGroup: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  inputPickerContainer: {
    height: '33%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 6,
  },
  picker: {
    width: '70%',
    backgroundColor: '#0014ff',
    borderRadius: 10,
    marginLeft: 4,
    color: '#fff000',
    fontSize: 17,
    fontWeight: 'bold', // Ajuste de fontWeight
    padding: 8,
  },
  inputTeamGroup: {
    position: 'absolute',
    top: 10,
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#0014ff10',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  input: {
    fontSize: calculateFontSize(20),
    color: '#fff',
    backgroundColor: '#0014ff',
    fontFamily: 'ComicSansMS',
    fontWeight: 'bold',
    padding: 12,
    borderRadius: 10,
  },
  label: {
    fontSize: calculateFontSize(18),
    color: '#0014ff',
    fontFamily: 'ComicSansMS',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label2: {
    fontSize: calculateFontSize(18),
    color: '#0014ff',
    fontFamily: 'ComicSansMS',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: calculateFontSize(20),
    fontWeight: 'bold',
    color: '#fff000',
    fontFamily: 'ComicSansMS',
  },
  customButton: {
    backgroundColor: '#0014ff',
    padding: isTablet ? 20 : 15,
    marginBottom: 20,
    borderColor: '#f59000',
    borderWidth: 4,
    borderRadius: 11,
    width: '45%',
    alignItems: 'center',
  },
  gameButtonContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginHorizontal: 10,
  },
  word: {
    fontSize: calculateFontSize(30),
    color: '#0014ff',
    fontWeight: 'bold',
    fontFamily: 'ComicSansMS',
    marginBottom: 40,
  },
  infoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    zIndex: 1, // Para asegurar que esté en frente de otros elementos
  },
  infoText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default styles;
