import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { logo, pin, search, logoPrimary, pinWhite, searchWhite } from '../../assets/icons';
import gradients from '../../resources/gradients';
import shadows from '../../resources/shadows';
import sizes from '../../resources/sizes';

interface NavigationBarState {
    selectedMenu: 'search' | 'home' | 'activities';
    onSelectMenu: (menu: 'search' | 'home' | 'activities') => void;
}

const NavigationBar: React.FC<NavigationBarState> = ({ selectedMenu, onSelectMenu }) => {
    const positions = {
        search: '10%',
        home: '50%',
        activities: '90%'
    }

    return (
        <View style={styles.navigationBarContainer}>
            <View style={{ ...styles.navigationBar, ...shadows.s100 }}>

                <LinearGradient colors={gradients.primary.colors}
                    start={gradients.primary.start}
                    end={gradients.primary.end}
                    style={{ ...styles.navigationBarItemSelector, left: positions[selectedMenu] }} />

                <View style={styles.navigationBarItemContainer}>
                    <TouchableWithoutFeedback onPress={() => onSelectMenu('search')} >
                        <View style={styles.navigationBarItem}>
                            <Image source={selectedMenu == 'search' ? searchWhite : search} style={styles.navigationBarItemIcon} />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => onSelectMenu('home')} style={styles.navigationBarItem}>
                        <View style={styles.navigationBarItem}>
                            <Image source={selectedMenu == 'home' ? logo : logoPrimary} style={styles.navigationBarItemLogo} resizeMode="contain" />
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => onSelectMenu('activities')} style={styles.navigationBarItem}>
                        <View style={styles.navigationBarItem}>
                            <Image source={selectedMenu == 'activities' ? pinWhite : pin} style={styles.navigationBarItemIcon} /> 
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    navigationBarContainer: {
        position: 'absolute',
        bottom: sizes.w04_5,
        left: sizes.w16,
        right: sizes.w16,
    },

    navigationBar: {
        position: 'relative',
        height: sizes.w15,
        borderRadius: sizes.w08,
        backgroundColor: 'white',
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: sizes.w01_5
    },
    navigationBarItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navigationBarItem: {
        width: sizes.w12,
        height: sizes.w12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationBarItemIcon: {
        width: sizes.w06,
        height: sizes.w06
    },
    navigationBarItemLogo: {
        width: sizes.w07,
        height: sizes.w07
    },
    navigationBarItemSelector: {
        position: 'absolute',
        width: sizes.w12,
        height: sizes.w12,
        borderRadius: 24,
        transform: [{translateX: -18}]
    },
})

export default NavigationBar;