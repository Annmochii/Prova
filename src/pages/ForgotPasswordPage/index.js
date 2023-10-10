import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { DefaultButton } from '../../components/DefaultButton/index.js'
import { NavBar } from '../../components/NavBar/index.js';
import { IconButton } from '../../components/IconButton/index.js';
import { BackArrow } from '../../components/BackArrow/index.js';
import { InputKey } from '../../components/InputKey/index.js';
import { InputText } from '../../components/InputText/index.js';
import { Link } from '@react-navigation/native';


import styles from './styles'

export default function ForgotPasswordPage({ navigation }) {

  return (
    <View style={styles.GlobalContainer}>
      <View style={styles.TopContainer}>
        <NavBar style={styles.Nav}></NavBar>
        <Link to={{ screen: 'Login' }}>
          <BackArrow/>
        </Link>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
          <Text style={styles.Title}>Recupere sua senha</Text>
          <View style={styles.Link}>
            <Text style={styles.Text}>Já possui uma conta? </Text>
            <Text style={styles.Hiperlink}><Link to={{ screen: 'SignIn' }}>Entre aqui</Link></Text>
          </View>
        </View>
        <View style={styles.Container}>
          <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com'></InputText>
        </View>
          <DefaultButton valor='Próximo'/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}