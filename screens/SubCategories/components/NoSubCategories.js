import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    noMainCategoriesSelected: {
        
    },
});

const NoSubCategories = (props) => {
    const { content } = props;

    return (
        <View style={styles.noMainCategoriesSelected}>
            <Text>{content}</Text>
        </View>
    )
};

export default NoSubCategories;
