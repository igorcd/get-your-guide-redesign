import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import sizes from '../resources/sizes';
import texts from '../resources/texts';
import { star } from '../assets/icons';
import colors from '../resources/colors';
import RatingBadge from './RatingBadge';
import shadows from '../resources/shadows';
const ExploreCard: React.FC = () => {
    return (
        <View style={{ ...styles.exploreCard, ...shadows.s200 }}>
            <ImageBackground source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Castle_Neuschwanstein.jpg" }} resizeMode="cover" style={styles.exploreCardImage}>
                <View style={styles.ratingContainer}>
                    <RatingBadge />
                </View>
                <BlurView style={styles.exploreCardTitle} tint="dark" intensity={70}>
                    <Text style={{ ...texts.headerLight, marginBottom: sizes.w01 }}>Neuschwanstein Tour</Text>
                    <Text style={texts.subheaderLight}>Alemanha</Text>
                </BlurView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    exploreCard: {
        width: sizes.w49,
        height: sizes.w65,
        borderRadius: sizes.w05,
        backgroundColor: 'white',
        elevation: 10,
        marginLeft: sizes.w03_5,
    },
    exploreCardImage: {
        height: sizes.w65,
        flex: 1,
        borderRadius: sizes.w05,
        overflow: 'hidden',
        position: 'relative'
    },
    exploreCardTitle: {
        position: 'absolute',
        bottom: sizes.w02,
        right: sizes.w02,
        left: sizes.w02,
        padding: sizes.w02_5,
        borderRadius: sizes.w02_5,
        overflow: 'hidden'
    },
    ratingContainer: {
        position: 'absolute',
        top: sizes.w02,
        left: sizes.w02,
    }
})

export default ExploreCard;