import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { pinPrimary } from '../assets/icons';
import colors from '../resources/colors';
import sizes from '../resources/sizes';
import texts from '../resources/texts';

interface ActivityStepItemProps {
    title: string;
    subtitle: string;
    image: any;
}
const ActivityStepItem: React.FC<ActivityStepItemProps> = ({ title, subtitle, image }) => {
    return(
        <View style={styles.stepItem}>
            <View style={styles.stepItemIcon}>
                <Image source={image} style={{ width: sizes.w07, height: sizes.w07}}/>
            </View>
            <View>
                <Text style={texts.title}>{title}</Text>
                <Text style={texts.caption2}>{subtitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    stepItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingVertical: 12,
        paddingRight: 22
    },
    stepItemIcon: {
        width: 40,
        height: 40,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        backgroundColor: colors.primary100
    }
})

export default ActivityStepItem;