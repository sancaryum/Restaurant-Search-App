import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () =>{
    const[term,setTerm] = useState('');
    //bu yapıları useResults'dan getirdik
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice=(price)=>{
        return results.filter(result=>{
            return result.price === price;
        });
    };

    return (
    /*flex:1 'li View yerine komple silerek yerine bu
     <> ve </> tagleri arasına alarak yazabiliriz. aynı sonucu verir.*/
    <View style={{flex:1}}>
    <SearchBar 
        term={term} 
        onTermChange={setTerm}
        //Aranacak kelime girildiğinde searchApi metodunu çağır
        onTermSubmit={()=>searchApi(term)}

    />
     {errorMessage ? <Text>{errorMessage}</Text> : null}
   
     <ScrollView>
    
     <ResultsList results={filterResultByPrice('$')} title={'Cost Effective'}/>
     <ResultsList results={filterResultByPrice('$$')} title={'Bit Pricier'}/>
     <ResultsList results={filterResultByPrice('$$$')} title={'Big Spender!'}/>
    
     </ScrollView>
   
    </View>
    );//yukarda üç tane resultslist olacak
};

const styles = StyleSheet.create({});

export default SearchScreen;

