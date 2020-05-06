import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult ] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View style={{alignSelf:'center'}}>
            <Text style = {styles.name}>{result.name}</Text>
            <FlatList
                data = {result.photos}
                keyExtractor = {(photo) => photo}
                renderItem = {({item}) => {
                    return <Image style = {styles.imageStyle} source = {{uri: item}}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        width: 250,
        height: 180,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10

    }
})

export default ResultsShowScreen;