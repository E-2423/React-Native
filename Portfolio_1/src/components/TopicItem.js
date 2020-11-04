import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const TopicItem = (Props) =>{
    return name(
        <TouchableOpacity>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );

    
};

export {TopicItem};