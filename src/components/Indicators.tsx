import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../resources/colors';

interface IndicatorsProps {
    selectedIndex: number,
    itemsLength: number;
}
const Indicators: React.FC<IndicatorsProps> = ({ selectedIndex, itemsLength }) => {
    return(
        <View style={{ flexDirection: 'row', height: 6}}>
            {Array(itemsLength).fill("").map((el, index) => {
                return <View key={index} style={[styles.indicator, { backgroundColor: index == selectedIndex ? colors.primary : 'white'}]}></View>
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    indicator: {
        backgroundColor: 'red',
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 3.5
    }
})

export default Indicators;