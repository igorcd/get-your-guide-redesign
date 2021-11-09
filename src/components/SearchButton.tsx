import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../resources/colors';
import sizes from '../resources/sizes';
import { searchPrimary } from '../assets/icons';

const SearchButton: React.FC = () => {
    return (
        <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Buscar destino</Text>
            <Image source={searchPrimary} style={{ width: sizes.w06, height: sizes.w06 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        height: sizes.w13,
        backgroundColor: colors.neutral300,
        borderRadius: sizes.w03,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes.w04
    },
    searchButtonContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes.w04
    },
    searchButtonText: {
        fontFamily: 'ubuntu-regular',
        color: colors.neutral900,
        opacity: .3,
        fontSize: sizes.w04,
        flex: 1
    }
})

export default SearchButton;