import React from 'react';
import { View, Text } from 'react-native';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data : ""
        }
    }
    componentDidMount() {
        this.setState({ data:'Ready for Data' })
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, margin: 50 }}> {this.state.data} </Text>
            </View>
        )
    }
}

export default App;