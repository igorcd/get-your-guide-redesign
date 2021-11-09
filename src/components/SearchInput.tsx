import React from 'react';

import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import colors from '../resources/colors';
import sizes from '../resources/sizes';
import { searchPrimary } from '../assets/icons';

const SearchInput: React.FC = () => {
    return (
        <View style={styles.searchInput}>
            <TextInput style={styles.searchInputField} placeholder="Busque o destino perfeito"/>
            <Image source={searchPrimary} style={{ width: sizes.w06, height: sizes.w06 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchInput: {
        height: sizes.w13,
        backgroundColor: colors.neutral300,
        borderRadius: sizes.w03,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes.w04
    },
    searchInputContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes.w04
    },
    searchInputField: {
        fontFamily: 'ubuntu-regular',
        color: colors.neutral900,
        fontSize: sizes.w04,
        flex: 1
    }
})

export default SearchInput;