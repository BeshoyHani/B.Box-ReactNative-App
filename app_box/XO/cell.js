import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';


export default function Cell(props) {
    let index = props.index;
    return (
        <TouchableOpacity
            style={[styles.cell, {
                borderRightWidth: (index + 1) % 3 == 0 ? 0 : 15,
                borderBottomWidth: ([6, 7, 8].includes(index)) ? 0 : 15,
            }]}
            activeOpacity={1}
            onPress={() => props.drawItem()}>
            {
                props.board[index] === "X" &&
                <Image source={require("../../assets/x.png")} style={styles.icon} />
            }

            {
                props.board[index] === "O" &&
                <Image source={require("../../assets/o.png")} style={styles.icon} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cell: {
        width: 100,
        height: 100,
        padding: 55,
        borderRadius: 10,
        borderColor: "#6E2D2C"
    },

    icon: {
        width: 60,
        height: 60,
        margin: -25
    }
});