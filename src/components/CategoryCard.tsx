import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import sizes from '../resources/sizes';

import { aventura } from '../assets/categories';
import { BlurView } from 'expo-blur';
import texts from '../resources/texts';
import shadows from '../resources/shadows';

const Category: React.FC = () => {
    return(
        <View style={{...styles.categoryCardContainer, ...shadows.s200}}>

            <ImageBackground source={aventura} resizeMode="cover" style={styles.categoryCard}>
                <BlurView style={styles.categoryCardTitle} tint="dark">
                    <Text style={{ ...texts.headerLight, marginBottom: sizes.w01, textAlign: 'center' }}>Aventura</Text>
                </BlurView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryCardContainer: {
        width: sizes.w31,
        height: sizes.w31,
        borderRadius: sizes.w05,
        backgroundColor: 'white',
        elevation: 10,
        marginLeft: sizes.w03_5,
    },
    categoryCard: {
        width: sizes.w31,
        flex: 1,
        borderRadius: sizes.w05,
        overflow: 'hidden',
        position: 'relative'
    },
    categoryCardTitle: {
        position: 'absolute',
        bottom: sizes.w02,
        right: sizes.w02,
        left: sizes.w02,
        paddingVertical: sizes.w01,
        borderRadius: sizes.w06
    },
})

export default Category;