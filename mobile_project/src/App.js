import { StatusBar } from "expo-status-bar";
import React from "react"
import {View, Text, Link} from "react-native"

export default function App()
{
    return (
        <View>
            <Text> First component mfs</Text>
            <Link to="https://www.google.com?q=en passant"> Google En Passant </Link>
            <StatusBar style="auto"/>
        </View>
    );
}