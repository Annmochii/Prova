import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles.js';
import { DefaultButton } from '../../components/DefaultButton/index.js';
import { NavBar } from '../../components/NavBar/index.js';
import { IconButton } from '../../components/IconButton/index.js';
import { BackArrow } from '../../components/BackArrow/index.js';
import { InputKey } from '../../components/InputKey/index.js';
import { InputText } from '../../components/InputText/index.js';
import { Link } from '@react-navigation/native';

export default function MainPage({ navigation }) {

  
  const [fontsLoaded] = useFonts({
    PoppinsMedium: require('../../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
    MerriweatherLight: require('../../assets/fonts/MerriweatherSans-Light.ttf'),
    MerriweatherRegular: require('../../assets/fonts/MerriweatherSans-Regular.ttf'),
  }); 


  return (
    <View style={styles.GlobalContainer}>
      <NavBar style={styles.Nav}/>
      <View style={styles.MainContainer}>
        <Image
          source={require('../../assets/medico-e-paciente.jpg')} 
          style={styles.Foto}
        />
        <Text style={styles.Title}>A melhor Clínica do Espírito Santo!</Text>
        <Text style={styles.SubTitle}>Venha nos Conhecer!</Text>
        <DefaultButton onPress={()=>navigation.navigate('Login')} valor="Agende uma Consulta!"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

