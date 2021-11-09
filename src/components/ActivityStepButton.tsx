import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../resources/colors';
import sizes from '../resources/sizes';
import texts from '../resources/texts';

interface ActivityStepButtonProps {
    title: string;
    image: any;
}
const ActivityStepButton: React.FC<ActivityStepButtonProps> = ({ title, image }) => {
    return(
        <View style={styles.stepItem}>
            <View style={styles.stepItemIcon}>
                <Image  source={image} style={{ width: sizes.w07, height: sizes.w07}}/>
            </View>
                <Text style={texts.headline4}>{title}</Text>
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

export default ActivityStepButton;