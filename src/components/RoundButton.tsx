import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import sizes from '../resources/sizes';

interface RoundButtonProps {
    image: any,
    onPress: () => void
}

const RoundButton: React.FC<RoundButtonProps> = ({ image, onPress }) => {
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={.8}>
            <View style={styles.roundButton}>
                <View style={styles.roundButtonContent}>
                    <Image source={image} style={styles.roundButtonIcon} />
                </View>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    roundButton: {
        backgroundColor: 'rgba(255,255,255,.5)',
        padding: 3,
        borderRadius: 27,
        width: 54,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundButtonContent: {
        backgroundColor: 'white',
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center'
    },
    roundButtonIcon: {
        width: 24,
        height: 24
    },
})

export default RoundButton;