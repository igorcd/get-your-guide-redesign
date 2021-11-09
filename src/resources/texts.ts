import { StyleSheet } from "react-native"
import colors from "./colors"
import sizes from "./sizes";

const texts = StyleSheet.create({
    headline1: {
        fontFamily: 'ubuntu-bold',
        fontSize: sizes.w06,
        color: colors.neutral900,
        marginBottom: sizes.w01
    },
    headline2: {
        fontFamily: 'ubuntu-bold',
        fontSize: sizes.w06,
        color: 'white'
    },
    headline4: {
        fontFamily: 'ubuntu-bold',
        color: colors.primary,
        fontSize: sizes.w03_5
    },
    headerLight: {
        fontSize: sizes.w03_5,
        color: 'white',
        fontFamily: 'ubuntu-medium'
    },
    subheaderLight: {
        fontSize: sizes.w02_5,
        color: 'white',
        fontFamily: 'ubuntu-regular'
    },
    subtitle: {
      fontFamily: 'ubuntu-regular',
      color: colors.neutral900,
      opacity: .3,
      fontSize: sizes.w03_5
    },
    title: {
        fontFamily: 'ubuntu-medium',
        color: colors.neutral900,
        fontSize: sizes.w04,
    },
    caption: {
        fontFamily: 'ubuntu-regular',
        fontSize: sizes.w03
    },
    header: {
        fontFamily: 'ubuntu-medium',
        fontSize: 13,
        color: colors.neutral900
    },
    subheader: {
        fontFamily: 'ubuntu-medium',
        fontSize: sizes.w03,
        color: colors.neutral900,
        opacity: .5
    },
    caption2: {
        fontSize: sizes.w03,
        color: colors.neutral900,
        opacity: .5
    },
    accent: {
        fontSize: sizes.w06,
        fontFamily: 'ubuntu-bold',
        color: colors.primary
    },
    captionPrimary: {
        fontSize: sizes.w04,
        color: colors.primary,
        fontFamily: 'ubuntu-bold'
    },
    captionLight: {
        fontSize: sizes.w03,
        color: 'white',
        fontFamily: 'ubuntu-bold'
    }
})

export default texts;