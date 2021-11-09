import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { Divider } from '.';
import sizes from '../resources/sizes';
import texts from '../resources/texts';
import Card from './Card';
import RatingBadge from './RatingBadge';

const SearchActivityCardGrid: React.FC = () => {
    return(
        <Card style={styles.activityCard}>
            <ImageBackground source={{ uri: "https://conteudo.imguol.com.br/blogs/125/files/2017/01/usaf2-1024x684.jpg"}} style={styles.activityImage}>
                <RatingBadge/>
            </ImageBackground>
            <View style={{ paddingHorizontal: sizes.w01_5, flex: 1 }}>
                <Text style={[texts.header, { marginBottom: sizes.w01}]}>Museu de Aviação e Espaço</Text>
                <Text style={texts.subheader}>Canadá</Text>

                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <Divider/>
                </View>

                <Text style={[texts.caption2, { marginBottom: 2}]}>A partir de</Text>
                <Text style={ texts.accent}>R$ 35,99</Text>
            </View>

        </Card>
    );
};

const styles = StyleSheet.create({
    activityCard: {
        flex: 1, 
        height: 270, 
        margin: sizes.w01_5, 
        padding: sizes.w02,
        paddingBottom: sizes.w03
    },
    activityImage: {
        aspectRatio: 1,
        borderRadius: sizes.w03_5,
        overflow: 'hidden',
        padding: sizes.w02,
        marginBottom: sizes.w02
    }
})

export default SearchActivityCardGrid;