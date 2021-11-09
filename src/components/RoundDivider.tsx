import React from 'react';
import { View,  StyleSheet } from 'react-native';
import colors from '../resources/colors';
import sizes from '../resources/sizes';

const RoundDivider: React.FC = () => {
    return(
        <View style={styles.roundDivider}>
        </View>
    );
};

const styles = StyleSheet.create({
    roundDivider: {
        alignSelf: 'stretch',
        height: sizes.w01_5,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        backgroundColor: colors.primary100,
        marginLeft: sizes.w05,
        marginBottom: sizes.w05
    }
})

export default RoundDivider;