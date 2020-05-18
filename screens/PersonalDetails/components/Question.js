import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import colors from '../../../constants/colors';

const styles = StyleSheet.create({
    questionContainer: {
        marginLeft: '10%',
        width: '80%',
        marginBottom: '8%',
    },
    ageTitle: {
        fontFamily: 'muli-bold',
        fontSize: 16,
        marginBottom: 12,
        marginTop: 8
    },
    agesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    ageConatiner: {
        padding: 12,
        height: 30,
        marginRight: '3%',
        marginTop: '3%',
        borderRadius: 20,
        paddingTop: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 0
        },
        shadowOpacity: 0.26,
        shadowRadius: 5,
        backgroundColor: 'white'
    },
    selected: {
        borderWidth: 1,
        borderColor: colors.secondary,
        backgroundColor: colors.secondary,
    },
    age: {
        fontFamily: 'muli-light',
        fontSize: 14,
        textAlign: 'center',
    }
});

const Question = (props) => {
    const { question, data, disable, handleChangeText, dropDown, onPress, selected } = props;

    const getAgeStyle = age => age === selected ? [styles.ageConatiner, styles.selected] : styles.ageConatiner;
 
    return (
        <View style={styles.questionContainer} pointerEvents={disable ? "none" : "null"}>
            {dropDown ?
            <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
                <Dropdown 
                    style={styles.dropDown} 
                    label={question} 
                    itemCount={data.length}
                    data={data} 
                    onChangeText={handleChangeText}
                />
            </TouchableWithoutFeedback>
            :
            <View>
                <Text style={styles.ageTitle}>{question}</Text>
                <View style={styles.agesContainer}>
                    {data.map(age => 
                        <TouchableOpacity key={age.value} style={getAgeStyle(age.value)} onPress={() => onPress(age.value)}>
                            <Text style={styles.age}>{age.value}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            }

        </View>
    )
};

export default Question;
