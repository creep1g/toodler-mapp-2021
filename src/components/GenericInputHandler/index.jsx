import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const GenericInputHandler = () => {
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        thumbnailPhoto: '',
    });

    const inputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    return (
        <View>
            <TextInput
                placeholder="Enter the name for the bucket"
                value={inputs.name}
                onChangeText={text => inputHandler('name', text)} />
            <TextInput
                placeholder="Enter the description for the bucket"
                value={inputs.description}
                onChangeText={text => inputHandler('description', text)} />
            <TextInput
                placeholder="Enter the thumbnail url for the bucket"
                value={inputs.thumbnailPhoto}
                onChangeText={text => inputHandler('thumbnailPhoto', text)} />
        </View>
    )
}