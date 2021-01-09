import React from 'react';
import { View, Text, FlatList } from 'react-native';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                { name: "Dhaval", email: "dhaval@gmail.com" },
                { name: "Parag", email: "parag@gmail.com" },
                { name: "John", email: "john@gmail.com" },
                { name: "Mehul", email: "mehul@gmail.com" },
                { name: "Amit", email: "amit@gmail.com" },
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 50, margin: 100 }}> Flat List </Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Text style={{ fontSize: 50, margin: 100 }}>{item.name}</Text>}
                />
            </View>
        )
    }
}

export default App;