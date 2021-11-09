import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import shadows from '../resources/shadows';
import sizes from '../resources/sizes';

interface CardProps {
    style?: StyleProp<ViewStyle>
}

const Card: React.FC<CardProps> = ({ style, children }) => {
    return(
        <View style={[styles.card, shadows.s200, style]}>
            { children }
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: sizes.w05,
        elevation: 10,
    }
})

export default Card;