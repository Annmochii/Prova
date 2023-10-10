import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  GlobalContainer: {
    /* 
    * Cute Colors:
    * Coral Red: #F86041
    * Off-White: #F7F7F7
    * Dark Purple: #26262B
    * Blue: 38A2FF
    */
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    gap: '16px',
  },
  Title: {
    color: '#26262B',
    fontFamily: 'PoppinsBold',
    fontWeight: 700,
    fontSize: 32,
  },
  Foto: {
    width: "100%",
  },
  MainContainer: {
    paddingInline: '0.5rem',
    gap: '16px',
  },
  Nav: {
    marginTop: 0,
  }
});

export default styles;