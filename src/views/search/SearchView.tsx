import React from 'react';
import { View } from 'react-native';
import SearchCard from '../../components/SearchActivityCardList';
import SearchInput from '../../components/SearchInput';
import sizes from '../../resources/sizes';

const SearchView: React.FC = () => {
    return(
        <View style={{ paddingTop: sizes.w04, paddingHorizontal: sizes.w05, paddingBottom: 100 }}>
            <SearchInput/>
            <View style={{ height: sizes.w05}}></View>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
        </View>
    );
};

export default SearchView;