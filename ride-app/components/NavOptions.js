import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"

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
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
                    <View> 
                        <Image 
                        style={{width:100, height:120}}
                        source={item.image}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        {/* <Icon 
                            style={tw`p-2 bg-black`}
                            color='white'
                            name='arrowright'
                            type='antdesign'
                        
                        /> */}
                    </View>
                </TouchableOpacity>
            )}

        />
    );
};

export default NavOptions;