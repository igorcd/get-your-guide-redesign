import React from 'react';
import { View, Text } from 'react-native';
import colors from '../resources/colors';
import texts from '../resources/texts';

const ActivityFinishButton: React.FC = () => {
    return(
        <View style={{ padding: 12, borderTopColor: colors.neutral100, borderTopWidth: 1}}>
            <View style={{ height: 40, borderRadius: 12, backgroundColor: "#F88871", justifyContent: 'center', alignItems: 'center'}}>
                <Text style={texts.headerLight}>Concluir</Text>
            </View>
        </View>
    );
};

export default ActivityFinishButton;