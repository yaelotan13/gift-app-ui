import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
    star: {
        marginRight: 1
    }
});

const Star = (props) => {
    return (
        props.filled ? 
        <AntDesign style={styles.star} name="star" size={12} color="black" /> 
        : 
        <AntDesign style={styles.star} name="staro" size={12} color="black" />
    )
};

export default Star;
