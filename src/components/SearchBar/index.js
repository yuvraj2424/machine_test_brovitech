import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import useStyle from './styles';

const RNSearchBar = (props) => {
    const styles = useStyle();

    return (
        <Searchbar
            placeholder={props.placeholder}
            onChangeText={props.onChangeSearch}
            value={props.value}
            style={styles.searchStyle}
        />
    );
};

export default React.memo(RNSearchBar);