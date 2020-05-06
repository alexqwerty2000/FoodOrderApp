import React from 'react';
import { Text, Image, View, StyleSheet} from 'react-native';

const ResultsDetail = ( {viewResult} ) => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source = {{uri:viewResult.image_url}}/>
            <Text style={styles.name}>{viewResult.name}</Text>
            <Text>{viewResult.rating} Stars, {viewResult.review_count} Reviews</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 180,
        borderRadius: 4,
        marginBottom:5
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail;