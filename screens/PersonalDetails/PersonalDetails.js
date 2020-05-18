import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

import HeaderButton from '../../navigation/HeaderButton';
import { Header } from '../../components/layout';
import colors from '../../constants/colors';
import { Question } from './components';

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonContainer: {
        marginLeft: '10%',
        width: '80%',
        marginTop: '8%',
        marginBottom: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    skipButton: {
        height: 30
    },
    button: {
        width: 212,
        height: 50,
        borderRadius: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    enabled: {
        backgroundColor: colors.primary,
    },
    disabled: {
        backgroundColor: colors.superLightGrey,
    },
    discoverText: {
        color: colors.white,
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        flex: 4
    },
    icon: {
        flex: 1
    }
});

const PersonalDetails = (props) => {
    const dispatch = useDispatch();
    const [personalInfo, setPersonalInfo] = useState({});
    console.log(personalInfo);
    
    const getRecipients = (gender) => {
        switch (gender) {
            case 'Female' : {
                return [{ value: 'Mom' }, { value: 'Grandma' }, { value: 'Sister' },  { value: 'Girlfriend' }, { value: 'Wife' }, { value: 'Friend'}, { value: 'Child' }]
            }
            case 'Male' : {
                return [{ value: 'Dad' }, { value: 'Grandpa' }, { value: 'Brother' },  { value: 'Boyfriend' }, { value: 'Husband' }, { value: 'Friend'}, { value: 'Child' }]
            }
            default : {
                return [{ value: 'Friend' }, { value: 'Child' }]
            }
        }
    };

    const getOccasion = (recipient) => {
        switch (recipient) {
            case 'Mom': {
                return [{ value: 'Birthday' }, { value: "Mother's day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Dad': {
                return [{ value: 'Birthday' }, { value: "Father's day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Sister': {
                return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}, { value: 'Graduation'}, { value: 'New child'}]
            }
            case 'Brother': {
                return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}, { value: 'Graduation'}, { value: 'New child'}]
            }
            case 'Grandma': {
                return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Grandpa': {
                return [{ value: 'Birthday' }, { value: "Family day" }, { value: 'Holiday'}, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }            
            case 'Girlfriend': {
                return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversary' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Boyfriend': {
                return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversary' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Husband': {
                return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversery' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Wife': {
                return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'Anniversery' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Friend': {
                return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'New House' }, { value: 'New Child' }, { value: 'Graduation' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
            case 'Child': {
                return [{ value: 'Birthday' }, { value: 'Holiday'}, { value: 'New House' }, { value: 'New Child' }, { value: 'Graduation' }, { value: 'To say Thanks'}, { value: 'No special occasion'}]
            }
        }
    };

    const shouldAskAboutAge = recipient => recipient === 'Sister'|| recipient === 'Brother' || recipient === 'Friend' || recipient === 'Child';
    
    const submitPressed = () => {
        console.log('showing products!!');
    };

    const enabled = () => personalInfo.gender && personalInfo.recipent && personalInfo.occastion;

    return (
        <SafeAreaView style={styles.conatiner}>
            <ScrollView>
                <Header header="Let’s Get Personal" subHeader="Just a few more questions, so we could find the perfect gift." />
                <View style={styles.questionsConatiner}>
                    <Question 
                        question="Gender of the recipient" 
                        data={[{value: "Female"}, {value: "Male"}]} 
                        onPress={(value) => setPersonalInfo(pervState => {
                            const newState = { ...pervState };
                            newState.gender = value;
                            return newState;
                        })}
                        selected={personalInfo.gender}
                    />
                    {personalInfo.gender &&
                    <Question 
                        question="Who is the present for?" 
                        data={getRecipients(personalInfo.gender)} 
                        onPress={(value) => setPersonalInfo(pervState => {
                            const newState = { ...pervState };
                            newState.recipent = value;
                            return newState;
                        })}
                        selected={personalInfo.recipent}
                    />}
                    {personalInfo.recipent && 
                    <Question 
                        question="What's the occasion?" 
                        data={getOccasion(personalInfo.recipent)} 
                        onPress={(value) => setPersonalInfo(pervState => {
                            const newState = { ...pervState };
                            newState.occastion = value;
                            return newState;
                        })}
                        selected={personalInfo.occastion}
                    />}
                    {personalInfo.occastion &&
                    shouldAskAboutAge(personalInfo.recipent) &&
                    <Question 
                        question="Age" 
                        data={[{ value: 'All' }, { value: 'Baby' }, { value: 'Toddler' }, { value: 'Kid 4-7' }, { value: 'Kid 8-12' }, { value: 'Teen' }, { value: 'Adult' }]} 
                        onPress={(value) => setPersonalInfo(pervState => {
                            const newState = { ...pervState };
                            newState.age = value;
                            return newState;
                        })}
                        selected={personalInfo.age}
                    />}
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.skipButton} >
                        <Button title="Skip" color={colors.secondaryDark} />
                    </View>
                    <TouchableOpacity
                        style={enabled() ? [styles.button, styles.enabled] : [styles.button, styles.disabled]}
                        onPress={enabled() ? submitPressed : null}
                        underlayColor='#fff'
                        accessibilityLabel="Show selected gifts"
                    >
                        <Text style={styles.discoverText}>Your Gifts</Text>
                        <AntDesign style={styles.icon} name="arrowright" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

PersonalDetails.navigationOptions = navigationData => {
    return {
        headerRight: () =>
        <Text color={colors.secondaryDark} onPress={() => navigationData.navigation.navigate({ routeName: 'PersonalDetails' })}>Skip</Text>,
        // <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item title='Next' iconName="rightcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'PersonalDetails' })} />
        // </HeaderButtons>,
        headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Prev' iconName="leftcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'SubCategories' })} />
        </HeaderButtons>,
    }
}

export default PersonalDetails;
