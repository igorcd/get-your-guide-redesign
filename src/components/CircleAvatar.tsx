import React from 'react';
import { ImageBackground, View } from 'react-native';
import { StyleSheet } from 'react-native';
import shadows from '../resources/shadows';
import sizes from '../resources/sizes';
const CircleAvatar: React.FC = () => {

    const image = { uri: "https://assets-br.wemystic.com.br/20191113010228/homem-capri-850x640.jpg" };

    return (
        <View style={{...styles.circleAvatar, ...shadows.s100}}>
            <ImageBackground source={image} style={styles.circleAvatarContent} resizeMode="cover">

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    circleAvatar: {
        width: sizes.w14,
        height: sizes.w14,
        borderRadius: sizes.w07,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 12,
    },
    circleAvatarContent: {
        width: sizes.w12,
        height: sizes.w12,
        borderRadius: sizes.w06,
        overflow: 'hidden'
    }
})

export default CircleAvatar;