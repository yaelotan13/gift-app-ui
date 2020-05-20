import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../navigation/HeaderButton';
import { Header, PrimaryButton, SecondaryButton } from '../../components/layout';
import colors from '../../constants/colors';
import { Question } from './components';
import { useSelector } from '../../hooks';
import { recipientSelector } from '../../store/selectors/recipent';
import { storeRecipientAge, storeRecipientGender, storeRecipientOcassion, storeRecipientRelationship, storeRecipientPrice } from '../../store/recipientInfo/actions';

import { getRecipients, getOccasion, shouldAskAboutAge } from './util';

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonContainer: {
        marginLeft: '15%',
        width: '50%',
        marginTop: '16%',
        marginBottom: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    icon: {
        flex: 1
    }
});

const PersonalDetails = (props) => {
    const dispatch = useDispatch();
    const recipentState = useSelector(recipientSelector);
    console.log(recipentState);
    
    const showResultScreen = () => {
        props.navigation.navigate({ routeName: 'ResultProducts' })
    };

    const enabled = () => recipentState.gender && recipentState.relationship && recipentState.ocassion;

    return (
        <SafeAreaView style={styles.conatiner}>
            <ScrollView>
                <Header header="Let’s Get Personal" subHeader="Just a few more questions, so we could find the perfect gift." />
                <View style={styles.questionsConatiner}>
                    <Question 
                        question="Price Range" 
                        data={[{ value: "All Prices" }, { value: "Up to $10" }, { value: "Up to $20" }, { value: "Up to $30" }, { value: "$30 to $50" }, { value: "$50 to $100" }, { value: "$100 to $200" }, { value: "Over $200" }]} 
                        onPress={price => dispatch(storeRecipientPrice(price))}
                        selected={recipentState.price}
                    />
                    <Question 
                        question="Gender" 
                        data={[{ value: "Female" }, { value: "Male" }]} 
                        onPress={gender => dispatch(storeRecipientGender(gender))}
                        selected={recipentState.gender}
                    />
                    {recipentState.gender &&
                    <Question 
                        question="Who is the present for?" 
                        data={getRecipients(recipentState.gender)} 
                        onPress={relationship => dispatch(storeRecipientRelationship(relationship))}
                        selected={recipentState.relationship}
                    />}
                    {recipentState.relationship && 
                    <Question 
                        question="What's the occasion?" 
                        data={getOccasion(recipentState.relationship)} 
                        onPress={ocassion => dispatch(storeRecipientOcassion(ocassion))}
                        selected={recipentState.ocassion}
                    />}
                    {recipentState.ocassion &&
                    shouldAskAboutAge(recipentState.relationship) &&
                    <Question 
                        question="Age" 
                        data={[{ value: 'All' }, { value: 'Baby' }, { value: 'Toddler' }, { value: 'Kid 4-7' }, { value: 'Kid 8-12' }, { value: 'Teen' }, { value: 'Adult' }]} 
                        onPress={age => dispatch(storeRecipientAge(age))}
                        selected={recipentState.age}
                    />}
                </View>
                <View style={styles.buttonContainer}>
                    <SecondaryButton handlePress={showResultScreen} buttonTitle="Skip" color={colors.secondaryDark} />
                    <PrimaryButton handlePress={enabled() ? showResultScreen : null} accessibilityLabel="Show selected gifts" buttonTitle="Your Gifts" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

PersonalDetails.navigationOptions = navigationData => {
    return {
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Skip' color={colors.secondaryDark} onPress={() => navigationData.navigation.navigate({ routeName: 'ResultProducts' })} />
        </HeaderButtons>,
        headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Prev' iconName="leftcircle" color={colors.primary} onPress={() => navigationData.navigation.navigate({ routeName: 'SubCategories' })} />
        </HeaderButtons>,
    }
}

export default PersonalDetails;
