import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { star } from '../assets/icons';
import colors from '../resources/colors';
import sizes from '../resources/sizes';

const RatingBadge: React.FC = () => {
    return (
        <View style={styles.rating}>
            <View style={styles.ratingContent}>
                <Image source={star} style={styles.ratingIcon} />
                <Text style={styles.ratingText}>4.9</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rating: {
        backgroundColor: 'rgba(255,255,255,.5)',
        padding: 3,
        borderRadius: sizes.w02_5,
        width: sizes.w14
    },
    ratingContent: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 6,
        paddingLeft: 4,
        paddingVertical: 4,
        borderRadius: 8
    },
    ratingIcon: {
        width: sizes.w04,
        height: sizes.w04
    },
    ratingText: {
        color: colors.primary,
        fontFamily: 'ubuntu-bold',
        fontSize: sizes.w03,
        marginLeft: 3
    }
})

export default RatingBadge;