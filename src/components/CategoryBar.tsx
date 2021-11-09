import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../resources/colors';
import sizes from '../resources/sizes';

const CategoryBar: React.FC = () => {
    const [category, setSelectedCategory] = useState("Museus");

    const categories = ["Museus", "Trilhas", "Parques", "Restaurantes", "Vida noturna"];

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: sizes.w05}}>

                {categories.map(el => {
                    return (
                        <TouchableHighlight underlayColor={colors.neutral100}  key={el} onPress={() => setSelectedCategory(el)}>
                            <View style={styles.categoryContainer}>
                                <Text style={category == el ? styles.textSelected : styles.text}>{ el }</Text>
                                <View style={[styles.selector, { opacity: category == el ? 1 : 0}]}></View>
                            </View>
                        </TouchableHighlight>
                    )
                })}

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: 'center',
        marginRight:  sizes.w04,
        paddingBottom: sizes.w01_5
    },
    text: {
        fontSize: sizes.w03_5,
        color: colors.neutral900,
        opacity: .3,
        marginBottom: sizes.w01_5,
        fontFamily: 'ubuntu-medium'
    },
    textSelected: {
        fontSize: sizes.w04,
        fontFamily: 'ubuntu-medium',
        color: colors.primary,
        marginBottom: sizes.w01_5
    }, 
    selector: {
        height: 3,
        width: sizes.w06,
        borderRadius: 2,
        backgroundColor: colors.primary
    }
})

export default CategoryBar;