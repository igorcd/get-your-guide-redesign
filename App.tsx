import React from 'react';

// Componentes
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';

// Hooks
import { useFonts } from 'expo-font';

// Resources
import colors from './src/resources/colors';
import { ubuntuBold, ubuntuLight, ubuntuMedium, ubuntuRegular } from './src/assets/fonts';
import MainView from './src/views/MainView';
import ActivityView from './src/views/activity/ActivityView';

export type RootStackParamList = {
    Home: undefined;
    Activity: undefined;
};
  

export default function App() {

    /** Carregar as fontes */
    const [fontsLoaded] = useFonts({
        "ubuntu-light": ubuntuLight,
        'ubuntu-regular': ubuntuRegular,
        'ubuntu-medium': ubuntuMedium,
        'ubuntu-bold': ubuntuBold
    })

    const Stack = createNativeStackNavigator();

    const content = (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={MainView} />
                <Stack.Screen name="Activity" component={ActivityView} />
            </Stack.Navigator>
        </NavigationContainer>
    )

    return (
        <SafeAreaView style={styles.container}>
            {fontsLoaded ? content : <AppLoading />}
            <StatusBar backgroundColor={colors.primary} style="light" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    }
});
