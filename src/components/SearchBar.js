import React from 'react';
import { TextInput, StyleSheet, View}  from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return (
        <View style={styles.inputBar}>
            <Ionicons 
                name="ios-search" 
                style = {styles.iconStyle}
            />
            <TextInput 
                autoCapitalize = "none"
                autoCorrect = {false}
                placeholder = "Search"
                style={styles.inputStyle}
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing ={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBar:{
        marginTop: 10,
        backgroundColor: '#d7d7d7',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row'
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal: 15
    }

})

export default SearchBar;