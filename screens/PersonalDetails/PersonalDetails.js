import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../navigation/HeaderButton';
import { Header, PrimaryButton, SecondaryButton } from '../../components/layout';
import colors from '../../constants/colors';
import { Question } from './components';
import { useSelector } from '../../hooks';
import { recipientSelector } from '../../store/selectors/recipent';
import { storeRecipientAge, storeRecipientGender, storeRecipientOcassion, storeRecipientRelationship, storeRecipientPrice } from '../../store/recipientInfo/actions';
import { utilFuncs, utilData } from './util';

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
});

const PersonalDetails = (props) => {
    const dispatch = useDispatch();
    const recipentState = useSelector(recipientSelector);
    console.log(recipentState);
    
    const showResultScreen = () => {
        props.navigation.navigate({ routeName: 'ResultProducts' })
    };

    return (
        <SafeAreaView style={styles.conatiner}>
            <ScrollView>
                <Header header="Let’s Get Personal" subHeader="Just a few more questions, so we could find the perfect gift." />
                <View style={styles.questionsConatiner}>
                    <Question 
                        question={utilData.questions[0].title} 
                        data={utilData.questions[0].data} 
                        onPress={price => dispatch(storeRecipientPrice(price))}
                        selected={recipentState.price}
                    />
                    <Question 
                        question={utilData.questions[1].title} 
                        data={utilData.questions[1].data} 
                        onPress={gender => dispatch(storeRecipientGender(gender))}
                        selected={recipentState.gender}
                    />
                    {recipentState.gender &&
                    <Question 
                        question={utilData.questions[2].title} 
                        data={utilFuncs.getRecipients(recipentState.gender)} 
                        onPress={relationship => dispatch(storeRecipientRelationship(relationship))}
                        selected={recipentState.relationship}
                    />}
                    {recipentState.relationship && 
                    <Question 
                        question={utilData.questions[3].title} 
                        data={utilFuncs.getOccasion(recipentState.relationship)} 
                        onPress={ocassion => dispatch(storeRecipientOcassion(ocassion))}
                        selected={recipentState.ocassion}
                    />}
                    {recipentState.ocassion &&
                    utilFuncs.shouldAskAboutAge(recipentState.relationship) &&
                    <Question 
                        question={utilData.questions[4].title} 
                        data={utilData.questions[4].data} 
                        onPress={age => dispatch(storeRecipientAge(age))}
                        selected={recipentState.age}
                    />}
                </View>
                <View style={styles.buttonContainer}>
                    <SecondaryButton handlePress={showResultScreen} buttonTitle="Skip" color={colors.secondaryDark} />
                    <PrimaryButton 
                        handlePress={utilFuncs.enabled(recipentState) ? showResultScreen : null} 
                        accessibilityLabel="Show selected gifts" 
                        buttonTitle="Your Gifts" 
                        disabled={!utilFuncs.enabled(recipentState)} 
                    />
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
