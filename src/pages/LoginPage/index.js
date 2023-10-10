import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import styles from './styles.js';
import { DefaultButton } from '../../components/DefaultButton/index.js';
import { NavBar } from '../../components/NavBar/index.js';
import { IconButton } from '../../components/IconButton/index.js';
import { BackArrow } from '../../components/BackArrow/index.js';
import { InputKey } from '../../components/InputKey/index.js';
import { InputText } from '../../components/InputText/index.js';

export default function LoginPage({ navigation }) { 

  return (
    <View style={styles.GlobalContainer}>
      <NavBar style={styles.Nav}/>
      <View style={styles.MainContainer}>
        <View style={styles.Hero}>
          <Text style={styles.Title}>Entre</Text>
          <View style={styles.Link}>
            <Text style={styles.Text}>Ainda não é um paciente? </Text>
              <Text style={styles.Hiperlink}><Link to={{ screen: 'SignUp' }}>Registre-se aqui</Link></Text>
          </View>
        </View>
        <View style={styles.Container}>
          <InputText label='Endereço de E-mail:' placeholder='seuemail@exemplo.com' ></InputText>
          <InputKey label='Senha:' placeholder='Digite sua senha' secure={true}  ></InputKey>
          <View style={styles.Forgot}>
            <Text style={styles.Hiperlink}><Link to={{ screen: 'ForgotPassword' }}>Esqueci minha senha</Link></Text> 
          </View>
        </View>
        <DefaultButton valor='Próximo'></DefaultButton>
        <StatusBar style="auto" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

