import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <EvilIcons name="search" style={styles.iconStyle} />
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            //Editleme bittikten sonra submit metodu çalışsın
            onEndEditing={()=>onTermSubmit()}

            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom:5,
       // alignItems: 'center',
    },
    inputStyle:{
        fontSize:14,
        flex:1,
    },
    iconStyle: {
        fontSize:35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal:15
    }

});

export default SearchBar;

