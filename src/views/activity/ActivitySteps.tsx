import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { busPrimary, clock, pin, pinPrimary, ticket } from '../../assets/icons';
import colors from '../../resources/colors';
import sizes from '../../resources/sizes';
import ActivityStepItem from '../../components/ActivityStepItem';
import Card from '../../components/Card';
import ActivityStepButton from '../../components/ActivityStepButton';
import ActivityFinishButton from '../../components/ActivityFinishButton';

const ActivitySteps: React.FC = () => {
    return(
        <View>

            <View style={styles.activityStep}>
                <View style={styles.indicator}/>

                <Card>
                    <ActivityStepItem image={pinPrimary} title="Bavaria City Hostel" subtitle="Concentração"/>
                    <ActivityStepItem image={clock} title="10:20" subtitle="Horário"/>
                    <ActivityFinishButton/>
                </Card>

                <View style={styles.barBottom}></View>
            </View>

            <View style={styles.activityStep}>
                <View style={styles.indicatorPending}/>

                <Card style={{ opacity: .6}}>
                    <ActivityStepItem image={pinPrimary} title="Ottostraße 1, 87629 Füssen" subtitle="Local de início do translado"/>
                    <ActivityStepItem image={clock} title="11:20" subtitle="Horário"/>
                    <ActivityStepItem image={busPrimary} title="8894844" subtitle="Translado"/>
                    <ActivityStepButton image={ticket} title="Ver bilhete"/>
                </Card>
                <View style={styles.barTop}></View>
                <View style={styles.barBottom}></View>
            </View>

            <View style={styles.activityStep}>
                <View style={styles.indicatorPending}/>

                <Card style={{ opacity: .6}}>
                    <ActivityStepItem image={pinPrimary} title="Tromberg 2, Sangerhausen " subtitle="Acesso"/>
                    <ActivityStepItem image={clock} title="15:20" subtitle="Horário"/>
                </Card>
                <View style={styles.barTop}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    activityStep: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes.w05,
        marginBottom: sizes.w03_5,
        position: 'relative',
        zIndex: 10
    },
    indicator: {
        width: 12,
        height: 12,
        backgroundColor: colors.primary,
        borderRadius: 6,
        marginRight: 18
    },
    indicatorPending: {
        width: 12,
        height: 12,
        backgroundColor: '#F9F9F9',
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 6,
        marginRight: 18,
        position: 'relative',
        zIndex: 10
    },
    barTop: {
        backgroundColor: colors.primary,
        position: 'absolute',
        top: -7,
        bottom: '50%',
        left: 25,
        width: 2,
    },
    barBottom: {
        backgroundColor: colors.primary,
        position: 'absolute',
        top: '50%',
        bottom: -7,
        left: 25,
        width: 2,
    }
})

export default ActivitySteps;