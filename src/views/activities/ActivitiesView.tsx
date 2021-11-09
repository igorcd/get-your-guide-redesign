import React from 'react';
import { View, Text } from 'react-native';
import MyActivitiesCard from '../../components/MyActivitiesCard';
import YearDivider from '../../components/YearDivider';
import sizes from '../../resources/sizes';
import texts from '../../resources/texts';

interface ActivitiesViewProps {
    openActivity: () => void
}

const ActivitiesView: React.FC<ActivitiesViewProps> = ({ openActivity }) => {
    return (
        <View style={{ paddingTop: sizes.w04, paddingHorizontal: sizes.w05, paddingBottom: 100 }}>
            <Text style={texts.headline1}>Suas atividades</Text>
            <Text style={[texts.subtitle, { marginBottom: sizes.w05}]}>Acompanhe sua viagem e relembre seus melhores momentos</Text>
            
            <MyActivitiesCard onPress={openActivity}/>
            <MyActivitiesCard onPress={openActivity}/>
            
            <View style={{ marginBottom: sizes.w03}}>
                <YearDivider/>
            </View>

            <MyActivitiesCard onPress={openActivity}/>
            <MyActivitiesCard onPress={openActivity}/>
        </View>
    );
};

export default ActivitiesView;