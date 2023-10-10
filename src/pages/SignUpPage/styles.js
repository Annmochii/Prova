import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  GlobalContainer: {
    /* 
    * Cute Colors:
    * Coral Red: #F86041
    * Off-White: #F7F7F7
    * Dark Purple: #26262B
    */
    gap: 98,
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  Nav: {
    marginTop: 0,
  },
  MainContainer:{
    width: '100%',
    gap: 38,
    paddingInline: '0.5rem',
  },
  Container: {
    gap: '16px',
    width: '100%',
    marginBottom: 29,
  },
  Hero: {
    gap: '12px',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  Title: {
    fontFamily: 'PoppinsBold',
    fontSize: '24px',
    color: '#26262B',
  },
  Link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    fontSize: '14px',
  },
  Text: {
    fontFamily: 'MerriweatherLight',
    color: '#26262B',
  },
  Hiperlink: {
    fontFamily: 'MerriweatherRegular',
    color: '#F86041',
    textDecorationLine: 'underline',
  },
  Checkbox: {
    width: 32,
    height: 32,
  },
  Sign: {
    width: '100%',
    margin: 'auto', 
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'row',
  }
});

export default styles;