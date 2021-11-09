import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import Card from '../../components/Card';
import sizes from '../../resources/sizes';
import { BlurView } from 'expo-blur';
import texts from '../../resources/texts';
import Indicators from '../../components/Indicators';
import CalendarBar from '../../components/CalendarBar';
import colors from '../../resources/colors';
import ActivitySteps from './ActivitySteps';
import RoundButton from '../../components/RoundButton';
import { angleLeft, chat } from '../../assets/icons';


type Props = NativeStackScreenProps<RootStackParamList, 'Activity'>;

const ActivityView: React.FC<Props> = ({ navigation }) => {
    const [page, setPage] = useState(0);
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>

            <View style={{ flex: 1, backgroundColor: "#F9F9F9", borderTopStartRadius: sizes.w05, borderTopEndRadius: sizes.w05 }}>

                <ScrollView >

                    {/** Carousel */}
                    <View style={{ height: 400, position: 'relative' }}>

                        <PagerView onPageScroll={(e) => setPage(e.nativeEvent.position)} style={{ flex: 1 }}>
                            <View style={{ padding: sizes.w03_5 }}>
                                <Card style={styles.activityCard}>
                                    <ImageBackground source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Castle_Neuschwanstein.jpg" }} style={{ flex: 1 }} />
                                </Card>
                            </View>
                            <View style={{ padding: sizes.w03_5 }}>
                                <Card style={styles.activityCard}>
                                    <ImageBackground source={{ uri: "https://www.rangoetrago.com.br/wp-content/uploads/2014/02/castelo-neuschwanstein-06-484x363.jpg" }} style={{ flex: 1 }} />
                                </Card>
                            </View>

                            <View style={{ padding: sizes.w03_5 }}>
                                <Card style={styles.activityCard}>
                                    <ImageBackground source={{ uri: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/01/34/cb.jpg" }} style={{ flex: 1 }} />
                                </Card>
                            </View>
                        </PagerView>

                        <BlurView style={styles.exploreCardTitle} tint="dark" intensity={70}>
                            <Text style={{ ...texts.headline2, marginBottom: sizes.w01 }}>Neuschwanstein Tour</Text>
                        </BlurView>
                        <View style={{ position: 'absolute', bottom: 90, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center' }}>
                            <Indicators itemsLength={3} selectedIndex={page} />
                        </View>

                        <View style={{position: 'absolute', top: 24, left: 24 }}>
                            <RoundButton image={angleLeft} onPress={() => navigation.pop() }/>
                        </View>

                        <View style={{position: 'absolute', top: 24, right: 24 }}>
                            <RoundButton image={chat} onPress={() => {} }/>
                        </View>
                    </View>

                    <CalendarBar />

                    <View style={{ height: sizes.w05}}></View>

                    <ActivitySteps/>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    activityCard: {
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
    },
    exploreCardTitle: {
        position: 'absolute',
        bottom: sizes.w06,
        right: sizes.w06,
        left: sizes.w06,
        padding: sizes.w02_5,
        borderRadius: sizes.w02_5,
        overflow: 'hidden'
    },
})

export default ActivityView;