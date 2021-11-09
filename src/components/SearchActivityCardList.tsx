import { BlurView } from 'expo-blur';
import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import { clock } from '../assets/icons';
import sizes from '../resources/sizes';
import texts from '../resources/texts';
import Card from './Card';
import RatingBadge from './RatingBadge';

const SearchActivityCardList: React.FC = () => {
    return (
        <Card style={styles.searchCard}>
            <ImageBackground source={{ uri: "https://conteudo.imguol.com.br/blogs/125/files/2017/01/usaf2-1024x684.jpg" }} style={styles.searchCardImage}>
                <RatingBadge />

                <BlurView style={styles.cardTitle} tint="dark" intensity={70}>
                    <Text style={{ ...texts.headerLight, marginBottom: sizes.w01 }}>Museu de Aviação e Espaço</Text>
                    <Text style={texts.subheaderLight}>Canadá</Text>
                </BlurView>
            </ImageBackground>
            <View style={{ paddingHorizontal: sizes.w01_5, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={[texts.caption2, { marginBottom: 2 }]}>A partir de</Text>
                    <Text style={texts.accent}>R$ 35,99</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={clock} style={{ width: sizes.w06, height: sizes.w06, marginRight: sizes.w01_5}}/>
                    <Text style={texts.captionPrimary}>45m</Text>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    searchCard: {
        padding: sizes.w02,
        height: 210,
        marginBottom: sizes.w03
    },
    searchCardImage: {
        height: 140,
        borderRadius: sizes.w03_5,
        overflow: 'hidden',
        padding: sizes.w02,
        marginBottom: sizes.w01_5,
        position: 'relative'
    },
    cardTitle: {
        position: 'absolute',
        bottom: sizes.w02,
        right: sizes.w02,
        left: sizes.w02,
        padding: sizes.w02_5,
        borderRadius: sizes.w02_5,
        overflow: 'hidden'
    },
})

export default SearchActivityCardList;