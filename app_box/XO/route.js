import 'react-native-gesture-handler';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './home';
import SinglePlayer from './SinglePlayer';
import MultiPlayers from './MultiPlayers'

const Stack = createNativeStackNavigator();
export default class Route extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        title: '',
                        headerShown: false,
                        headerTransparent: true,
                    }} />

                <Stack.Screen name="SinglePlayer" component={SinglePlayer}
                    options={{
                        title: '',
                        headerShown: false,
                        headerTransparent: true,
                    }} />

                <Stack.Screen name="MultiPlayers" component={MultiPlayers}
                    options={{
                        title: '',
                        headerShown: false,
                        headerTransparent: true,
                    }} />
            </Stack.Navigator>
        );
    }
}