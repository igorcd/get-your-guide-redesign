import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { ExploreCard, SearchButton, Container, RoundDivider, CategoryCard } from '../../components';
import SearchActivityCardGrid from '../../components/SearchActivityCardGrid';
import CategoryBar from '../../components/CategoryBar';
import sizes from '../../resources/sizes';
import texts from '../../resources/texts';

const HomeView: React.FC = () => {

    return (
        <View style={{ paddingTop: sizes.w04, paddingBottom: 100 }}>

            <Container>
                <SearchButton />
                <View style={{ height: sizes.w05 }}></View>

                <Text style={texts.headline1}>Explore o mundo</Text>
                <Text style={texts.subtitle}>Nós cuidamos do resto</Text>
            </Container>

            {/** Explorar */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', paddingStart: sizes.w01_5, paddingEnd: sizes.w05, paddingBottom: sizes.w08, paddingTop: sizes.w06 }}>
                    <ExploreCard />
                    <ExploreCard />
                </View>
            </ScrollView>

            <RoundDivider />

            {/** Categorias */}
            <Container>
                <Text style={texts.headline1}>Seu estilo</Text>
                <Text style={texts.subtitle}>Atividades que combinam com sua personalidade</Text>
            </Container>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', paddingStart: sizes.w01_5, paddingEnd: sizes.w05, paddingBottom: sizes.w08, paddingTop: sizes.w06 }}>
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </View>
            </ScrollView>

            <RoundDivider />

            {/** Atividades */}
            <CategoryBar />

            <View style={{ paddingHorizontal: sizes.w03_5, paddingTop: sizes.w02}}>
                <View style={{ flexDirection: 'row'}}>
                    <SearchActivityCardGrid />
                    <SearchActivityCardGrid />
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <SearchActivityCardGrid />
                    <SearchActivityCardGrid />
                </View>

            </View>
        </View>
    );
};

export default HomeView;