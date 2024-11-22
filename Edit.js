import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({ route, navigation }) => {
    const { name, image, type, index } = route.params;
    const [updatedName, setUpdatedName] = useState(name);


    const imageNumber = image.match(/SV3pt5_EN_(\d+)\.png$/)[1];
    const [updatedImageNumber, setUpdatedImageNumber] = useState(imageNumber);


    const baseURL = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_';


    const typeIndexMap = {
        '🔥 Fire': 0,
        '⚡ Electric': 1,
        '🌱 Grass': 2,
        '🌊 Water': 3,
    };
    const sectionIndex = typeIndexMap[type];

    return (
        <View style={{ padding: 10 }}>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokémon Name:</Text>
                <TextInput
                    value={updatedName}
                    style={{ borderWidth: 1, padding: 8 }}
                    onChangeText={setUpdatedName}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image Number:</Text>
                <TextInput
                    value={updatedImageNumber}
                    style={{ borderWidth: 1, padding: 8 }}
                    keyboardType="numeric"
                    onChangeText={setUpdatedImageNumber}
                />
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Button
                    title="Save"
                    onPress={() => {
                        const updatedImageURL = `${baseURL}${updatedImageNumber}.png`;
                        datasource[sectionIndex].data[index] = {
                            key: updatedName,
                            image: updatedImageURL,
                        };
                        navigation.navigate('Home');
                    }}
                />
                <Button
                    title="Delete"
                    onPress={() => {
                        Alert.alert('Confirm Delete', 'Are you sure you want to delete this Pokémon?', [
                            {
                                text: 'Yes',
                                onPress: () => {
                                    datasource[sectionIndex].data.splice(index, 1);
                                    navigation.navigate('Home');
                                },
                            },
                            { text: 'No' },
                        ]);
                    }}
                />
            </View>
        </View>
    );
};

export default Edit;
