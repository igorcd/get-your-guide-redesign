import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Divider } from '.';
import colors from '../resources/colors';
import sizes from '../resources/sizes';

const YearDivider: React.FC = () => {
    return(
        <View style={styles.yearDivider}>
            <View style={styles.divider}/>
            <Text style={styles.year}>2020</Text>
            <View style={styles.divider}/>
        </View>
    );
};

const styles = StyleSheet.create({
    yearDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes.w05,
        marginVertical: sizes.w02
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.neutral300
    },
    year: {
        fontSize: sizes.w04_5,
        fontFamily: 'ubuntu-bold',
        marginHorizontal: sizes.w03,
        opacity: .3
    }
})

export default YearDivider;