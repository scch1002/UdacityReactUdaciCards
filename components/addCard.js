import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { addNewCard } from '../actions/decks'
import { Button } from './button'

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    addCard = () => {
        this.props.dispatch(addNewCard(this.props.navigation.state.params.deckId, {
            text: this.state.question,
            answer: this.state.answer
        }))
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 3}}>
                    <Text style={styles.label}>Question:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                    />
                    <Text style={styles.label}>Answer:</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Button title="Submit" onPress={this.addCard}></Button>
                </View>
            </View>
        )
    }
}

export default connect()(AddCard)