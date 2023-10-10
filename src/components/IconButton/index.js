import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';

export function IconButton(props){
    const styles = StyleSheet.create({
        DefaultButton: {
            flexDirection: 'row',
            gap: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#38A2FF',
            borderRadius: '30px',
            color: '#F7F7F7',
            border: 'none',
            paddingBlock: props.paddingBlock??"12px",
            paddingInline: props.paddingInline??"32px",
            fontSize: '14px',
            fontFamily: 'PoppinsMedium',
            height: 36,
        },
        TextButton: {
            color: '#F7F7F7',
            fontSize: '14px',
            fontFamily: 'PoppinsMedium',
        }
    });
    
    return (
        <TouchableOpacity style={styles.DefaultButton} onPress={props.onPress}>
            <Icon 
                name={'person' }
                color={'#F7F7F7'}
                size={17}
            />
            <Text style={styles.TextButton}>{props.valor}</Text>
        </TouchableOpacity>
    )
}


