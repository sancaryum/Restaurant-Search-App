import React from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';
 

//normalde {title, results} geliyor
const ResultsList = (props) => {
    //Eğer araöa sonucuna göre işletme yoksa listeyi gösterme
   if(!props.results.length){
       return null;
   }

   
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        
        <FlatList
            horizontal
            data={props.results}
            keyExtractor={results=>results.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>{
               return (
               <TouchableOpacity onPress={()=>props.navigation.navigate('ResultsShow',{id:item.id})}>
                   <ResultsDetail result={item} />
               </TouchableOpacity>
               //result show screen'e giderken bir de item id'si gidecek
               //ResultsDetail'e okunan item'i props olarak gönderiyoruz
               );
            }}
            
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

export default withNavigation(ResultsList);
