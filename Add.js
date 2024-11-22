import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [imageNumber, setImageNumber] = useState('146'); // Default image number
    const [type, setType] = useState('🔥 Fire');


    const baseURL = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_';

    return (
        <View style={{ padding: 10 }}>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokémon Name:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 8 }}
                    placeholder="Enter Pokémon name"
                    onChangeText={(text) => setName(text)}
                />
            </View>


            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image Number:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 8 }}
                    placeholder="Enter image number (e.g., 146)"
                    keyboardType="numeric"
                    onChangeText={(text) => setImageNumber(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Type:</Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: '🔥 Fire', value: '🔥 Fire' },
                        { label: '⚡ Electric', value: '⚡ Electric' },
                        { label: '🌊 Water', value: '🌊 Water' },
                        { label: '🌱 Grass', value: '🌱 Grass' },
                    ]}
                />
            </View>


            <Button
                title="Add Pokémon"
                onPress={() => {
                    if (name && imageNumber) {
                        const newPokemon = {
                            key: name,
                            image: `${baseURL}${imageNumber}.png`, // Construct the full image URL
                        };


                        const typeIndexMap = {
                            '🔥 Fire': 0,
                            '⚡ Electric': 1,
                            '🌱 Grass': 2,
                            '🌊 Water': 3,
                        };
                        const index = typeIndexMap[type];

                        datasource[index].data.push(newPokemon);
                        navigation.navigate('Home');
                    } else {
                        Alert.alert('Error', 'Please fill in all fields');
                    }
                }}
            />
        </View>
    );
};

export default Add;
