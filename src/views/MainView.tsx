import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

// Componentes
import { ScrollView, View } from 'react-native';
import Header from './includes/Header';

// Resources
import colors from '../resources/colors';
import sizes from '../resources/sizes';
import HomeView from './home/HomeVIew';
import NavigationBar from './includes/NavigationBar';
import SearchView from './search/SearchView';
import ActivitiesView from './activities/ActivitiesView';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const MainView: React.FC<Props> = ({ navigation }) => {
    const [menu, setMenu] = useState<'search' | 'home' | 'activities'>("home")

    const openActivityDetail = () => navigation.push("Activity")

    const views = {
        'search': <SearchView/>,
        'home': <HomeView/>,
        'activities': <ActivitiesView openActivity={openActivityDetail}/>
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>

            <View style={{ flex: 1, backgroundColor: 'white', borderTopStartRadius: sizes.w05, borderTopEndRadius: sizes.w05 }}>

                {/** Header */}
                <Header />

                {/** Conteúdo */}
                <View style={{ flex: 1, position: 'relative' }}>
                    <ScrollView style={{ flex: 1 }}>
                        {views[menu]}
                    </ScrollView>

                    {/** Menu */}
                    <NavigationBar selectedMenu={menu} onSelectMenu={(menu) => setMenu(menu)}/>
                </View>
            </View>
        </View>
    );
};

export default MainView;