import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Sina</Text>
            <Button
                onPress={() => navigation.navigate("Components")}
                title="Go to Components Demo"
            />
            <Button
                onPress={() => navigation.navigate("Image")}
                title="Go to Image Demo"
            />
            <Button
                onPress={() => navigation.navigate("Counter")}
                title="Go to Counter Demo"
            />
            <Button
                onPress={() => navigation.navigate("Color")}
                title="Go to Color Demo"
            />
            <Button
                onPress={() => navigation.navigate("Square")}
                title="Go to Square Demo"
            />
            <Button
                onPress={() => navigation.navigate("Text")}
                title="Go to Text Screen Demo"
            />
            <TouchableOpacity onPress={() => navigation.navigate("List")}>
                <Text>Go to List Demo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
