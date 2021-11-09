import React from 'react';
import { View, Text} from 'react-native';
import { CircleAvatar, Divider } from '../../components';
import IconButton from '../../components/IconButton';
import sizes from '../../resources/sizes';
import texts from '../../resources/texts';

const Header: React.FC = () => {
    return (
        <View style={{ paddingHorizontal: sizes.w05, paddingTop: sizes.w04 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: sizes.w04 }}>
                <CircleAvatar />
                <View style={{ paddingLeft: sizes.w03, flex: 1 }}>
                    <Text style={texts.caption}>Bem-vindo</Text>
                    <Text style={texts.title}>Igor Dantas</Text>
                </View>
                <IconButton size={sizes.w09}/>
            </View>
            <Divider />
        </View>
    );
};

export default Header;