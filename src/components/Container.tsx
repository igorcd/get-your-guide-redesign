import React from 'react';
import { View } from 'react-native';
import sizes from '../resources/sizes';

const Container: React.FC = ({ children }) => {
    return(
        <View style={{  paddingHorizontal: sizes.w05}}>
            {children}
        </View>
    );
};

export default Container;