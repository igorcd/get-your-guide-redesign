import { BlurView } from 'expo-blur';
import React from 'react';
import { ImageBackground, StyleSheet, Text, Image, TouchableNativeFeedback, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { calendarWhite } from '../assets/icons';
import sizes from '../resources/sizes';
import texts from '../resources/texts';
import Card from './Card';

interface MyActivitiesCardProps {
    onPress: () => void;
}

const MyActivitiesCard: React.FC<MyActivitiesCardProps> = ({ onPress }) => {
    return (
        <TouchableHighlight underlayColor="transparent" onPress={onPress}>
            <Card style={styles.myActiviesCard}>
                <ImageBackground source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Castle_Neuschwanstein.jpg" }} style={styles.myActiviesCardImage}>
                    <BlurView style={styles.myActivitiesCardLocation} tint="dark" intensity={70}>
                        <Text style={{ ...texts.headerLight, marginBottom: sizes.w01 }}>Neuschwanstein Tour</Text>
                        <Text style={texts.subheaderLight}>Alemanha</Text>
                    </BlurView>

                    <BlurView style={styles.myActiviesCardDate} tint="dark" intensity={70}>
                        <Image source={calendarWhite} style={{ width: sizes.w05, height: sizes.w05, marginRight: sizes.w01_5 }} />
                        <Text style={texts.captionLight}>20/out</Text>
                    </BlurView>
                </ImageBackground>

            </Card>

        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    myActiviesCard: {
        height: 180,
        overflow: 'hidden',
        marginBottom: sizes.w03
    },
    myActiviesCardImage: {
        flex: 1,
        position: 'relative'
    },
    myActivitiesCardLocation: {
        position: 'absolute',
        bottom: sizes.w02,
        right: sizes.w02,
        left: sizes.w02,
        padding: sizes.w02_5,
        borderRadius: sizes.w02_5,
        overflow: 'hidden'
    },
    myActiviesCardDate: {
        position: 'absolute',
        top: sizes.w02,
        right: sizes.w02,
        borderRadius: sizes.w02_5,
        padding: sizes.w02_5,
        width: 85,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    }
})

export default MyActivitiesCard;