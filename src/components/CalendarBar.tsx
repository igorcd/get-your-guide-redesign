import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import colors from '../resources/colors';
import sizes from '../resources/sizes';

const CalendarBar: React.FC = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.dayContainer} >
                {Array(9).fill("").map((el, index) => {
                    return (
                        <View style={styles.day} key={index}>
                            <Text style={[styles.dayText, {color: index == 0 ? colors.primary : '#7B7A79'}]}>{'Dia ' + (index +1)}</Text>
                            <Text style={styles.dateText}>{`${10+index}/ago`}</Text>
                            <View style={[styles.indicator, { opacity: index == 0 ? 1 : 0}]}></View>
                        </View>
                    )
                })}
            </View>
            <View style={styles.bar}></View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    dayContainer: {
        flexDirection: 'row',
        paddingLeft: sizes.w04,
        position: 'relative'
    },
    day: {
        marginRight: 20,
        alignItems: 'center',
        paddingStart: 6,
        paddingBottom: 1,
        width: 60
    },
    dayText: {
        fontSize: 18,
        fontFamily: 'ubuntu-bold',
        color: colors.primary,
        marginBottom: 3
    },
    dateText: {
        fontSize: 12,
        fontFamily: 'ubuntu-regular',
        color: colors.neutral900,
        opacity: .5,
        marginBottom: 10
    },
    indicator: {
        height: 3,
        borderTopStartRadius: 3,
        borderTopEndRadius: 3,
        backgroundColor: colors.primary,
        alignSelf: 'stretch'
    },
    bar: {
        height: 1,
        backgroundColor: colors.neutral300,
        left: 20,
        right: 0,
        bottom: 0,
        position: 'absolute'
    }
})

export default CalendarBar;