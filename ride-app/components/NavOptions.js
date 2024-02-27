import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: require("../screens/Images/ride.png"),
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: require("../screens/Images/ride.png"),
        screen: "EatsScreen",
    }

];

const NavOptions = () => {

    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <View>
                        <Image 
                        style={{width:100, height:120}}
                        source={item.image}
                        />
                        <Text>{item.title}</Text>

                    </View>
                </TouchableOpacity>
            )}

        />
    );
};

export default NavOptions;