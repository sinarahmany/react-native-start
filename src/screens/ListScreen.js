import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: "11" },
        { name: "Friend #2", age: "11" },
        { name: "Friend #3", age: "11" },
        { name: "Friend #4", age: "11" },
        { name: "Friend #5", age: "11" },
        { name: "Friend #6", age: "11" },
        { name: "Friend #7", age: "11" },
    ];

    return (
        <FlatList
            horizontal //scroll horizontal
            showsHorizontalScrollIndicator={false} //Hide ScrollBar
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text style={styles.textStyle}>
                            {item.name + "-" + item.age}
                        </Text>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    },
});

export default ListScreen;
