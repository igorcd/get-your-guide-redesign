import React from 'react';
import { Button, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { menu } from '../assets/icons';
import colors from '../resources/colors';
import sizes from '../resources/sizes';

interface IconButtonProps {
    size?: number
}

const IconButton: React.FC<IconButtonProps> = ({ size }) => {
    return(
        <TouchableHighlight underlayColor={colors.neutral100}  onPress={() => {}} style={{ width: size, height: size, borderRadius: 9999, flexShrink: 0}}>
            <Image source={menu} style={{ width: size, height: size }}/>
        </TouchableHighlight >
    );
};

IconButton.defaultProps = {
    size: 50
}


export default IconButton;