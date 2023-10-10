import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { Link } from '@react-navigation/native';
import { DefaultButton } from '../../components/DefaultButton/index.js';
import { NavBar } from '../../components/NavBar/index.js'
import { IconButton } from '../../components/IconButton/index.js'
import { BackArrow } from '../../components/BackArrow/index.js'
import { InputKey } from '../../components/InputKey/index.js'
import { InputText } from '../../components/InputText/index.js'
import styles from './styles'

export default function SignUpPage({ navigation }) {

  return (
    <View style={styles.GlobalContainer}>
      <NavBar style={styles.Nav}></NavBar>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
          <Text style={styles.Title}>Registre-se</Text>
          <View style={styles.Link}>
            <Text style={styles.Text}>Já possui uma conta? </Text>
            <Text style={styles.Hiperlink}><Link to={{ screen: 'Login' }}>Entre aqui</Link></Text>
          </View>
        </View>
        <View style={styles.Container}>
          <InputText label='Nome:' placeholder='Digite seu nome'></InputText>
          <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com'></InputText>
          <InputKey label='Senha:' placeholder='Crie uma senha' secure={true}></InputKey>
        </View>
        <DefaultButton valor='Próximo'></DefaultButton>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}