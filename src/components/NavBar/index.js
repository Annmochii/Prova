import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { IconButton } from '../IconButton/index';
import { Link } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export function NavBar(props){
  const styles = StyleSheet.create({
    Container: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingInline: '0.5rem',
      padding: 14,
      borderBottomWidth: 1,
      borderColor: '#D9D9D9',
    },
    LeftContainer:{
      flexDirection: 'row',
      alignItens: 'center',
      gap: 32,
    },
    Logo:{
      width: 36,
      height: 36,
      margin: 'auto',
      color: '#26262a',
    },
    Icon:{
      alignItens: 'center',
      marginBlock: 'auto',
    },
  });

  return(
    <View style={styles.Container}>
      <View style={styles.LeftContainer} >
        <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
          <Icon 
              name={"home"}
              color={'#26262B'}
              size={36}
          />
        </TouchableOpacity>
      </View>
      <Link to={{ screen: 'Login' }}>
        <IconButton valor={'Login'} paddingBlock={8} paddingInline={18}/>
      </Link>
    </View>
  )
}