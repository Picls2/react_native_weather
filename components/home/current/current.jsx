import {React, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './current.styles';
import {COLORS, search} from '../../../constants';
import useFetch from '../../../hooks/useFetch';


const Current = () => {
  const [searchValue, setsearchValue] = useState('');
  const [location, setlocation] = useState('Milton, ON');
  const {datas, isLoading, error} = useFetch(location, 'metric');

  return (

    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => {
            setsearchValue(value);
            console.log(searchValue);
          }}
          placeholder='City, Prov ex: Milton, ON'
          placeholderTextColor={COLORS.primary}

        />

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {}}
        >
          <Image
            source={search}
            resizeMode='contain'
            style={styles.searchBtnImg}
          />
        </TouchableOpacity>
      </View>
      <View>
        {
                isLoading ? (
                    <ActivityIndicator />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <View>
                      <Text style={styles.locationText}>{location}</Text>
                      <Text style={styles.tempText}>{
                        `${''}°`
                      }</Text>
                    </View>
                )
        }
      </View>
    </View>
  );
};

export default Current;
