import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
const TextScreen = () => {
    const [name, setName] = useState("");
    return (
        <View>
             <Text>Enter your password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
           <Text>My Name is: {name}</Text>
           {name.length < 5 ? <Text>password needs ro be longer than 5</Text> : <Text>looks good</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
    },
});

export default TextScreen;
