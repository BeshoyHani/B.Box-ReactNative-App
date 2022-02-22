import React, { Component } from "react";
import SplashScreen from 'react-native-splash-screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import SimpleCounter from './app_box/counter_app/SimpleCounter'
import RandomGenerator from './app_box/generate_random_app/GenerateRandom'
import ToDo from './app_box/todo_app/ToDo'
import Route from './app_box/XO/route'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Counter" component={SimpleCounter}
                        options={{
                            tabBarLabel: 'Counter',
                            tabBarIcon: color => (
                                <FontAwesome name="hourglass-start" color={color} size={26} />
                            )
                        }}
                    />
                    <Tab.Screen name="Random Generator" component={RandomGenerator}
                        options={{
                            tabBarLabel: 'Random Generator',
                            tabBarIcon: color => (
                                <FontAwesome name="random" color={color} size={26} />
                            )
                        }} />
                    <Tab.Screen name="ToDo" component={ToDo}
                        options={{
                            tabBarLabel: 'ToDo',
                            tabBarIcon: color => (
                                <FontAwesome name="list-alt" color={color} size={26} />
                            )
                        }} />

                    <Tab.Screen name="Game" component={Route}
                        options={{
                            title: 'Tic Tac Toe',
                            tabBarIcon: color => (
                                <FontAwesome name="rocket" color={color} size={26} />
                            )
                        }} />

                </Tab.Navigator>
            </NavigationContainer>
        )
    }

}

const Tab = createBottomTabNavigator();