import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from "./Data";

const styles = StyleSheet.create({
    textStyle: { fontSize: 15, margin: 10 },
    opacityStyle: { borderWidth: 1, margin: 5, padding: 10, alignItems: 'center' },
    headerText: { fontSize: 20, margin: 10, textAlign: 'center', fontWeight: 'bold' },
    image: { width: 100, height: 100, resizeMode: 'contain' },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                    navigation.navigate('Edit', {
                        index,
                        type: section.title,
                        name: item.key,
                        image: item.image,
                    })
                }
            >
                <Text style={styles.textStyle}>{item.key}</Text>
                <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button title="Add Pokémon" onPress={() => navigation.navigate('Add')} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>{title}</Text>
                )}
            />
        </View>
    );
};

export default Home;
