import React from 'react';
import {View,Text,StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

//normalde {title, results} geliyor
const ResultsList = (props) => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
    
        <FlatList
            horizontal
            data={props.results}
            keyExtractor={results=>results.id}
            renderItem={({item})=>{
               return <ResultsDetail result={item}/>
               //ResultsDetail'e okunan itemm'i props olarak gönderiyoruz
               
            }}
            showsHorizontalScrollIndicator={false}
        />
    </View>

    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,   
        marginBottom:5,
    },
    container:{
        marginBottom:10,
    }
 });

export default ResultsList;
