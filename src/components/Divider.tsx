import React from 'react';
import { View } from 'react-native';
import colors from '../resources/colors';

const Divider: React.FC = () => {
    return(
        <View style={{ height: 1, backgroundColor: colors.neutral100}}>
        </View>
    );
};

export default Divider;