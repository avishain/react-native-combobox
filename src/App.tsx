import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Animated } from 'react-native';
import { Icon } from 'react-native-elements';

interface ComboBoxProps {
    values: Array<string>,
    onValueSelect: (value: string) => void,
    fontFamily?: string,
    color?: string,
    fontSize?: number,
    backgroundColor?: string,
    defaultValue?: string,
    rtl?: boolean
}

interface OptionProps {
    text: string
}

export default ({
    values,
    onValueSelect,
    fontFamily,
    color,
    fontSize,
    defaultValue = '',
    backgroundColor = '',
    rtl = false
}: ComboBoxProps) => {

    const [selectedSubject, setSelectedSubject] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [scaleY] = useState(new Animated.Value(0.001));

    const toggle = () => {
        Animated.spring(scaleY, {
            toValue: isOpen ? 0.00 : 1,
            useNativeDriver: true
        }).start();
        setIsOpen(!isOpen);
    }

    const rotate = scaleY.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const textFontStyle = fontFamily ? { fontFamily } : {};
    const textColorStyle = color ? { color } : {};
    const textSizeStyle = fontSize ? { fontSize } : {};
    const textStyle = { ...textColorStyle, ...textFontStyle, ...textSizeStyle };

    const onSelect = (selected: string) => {
        setSelectedSubject(selected);
        onValueSelect(selected);
        toggle();
    }
    const Option = ({ text }: OptionProps) => {
        return (
            <TouchableOpacity
                style={styles.option}
                onPress={() => onSelect(text)}
            >
                <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>
        )
    }

    const height = values.length > 5 ? 300 : values.length * 60;
    const flexDirection = rtl === true ? 'row-reverse' : 'row';
    return (
        <View style={{ position: 'relative', padding: 5 }}>
            <TouchableOpacity activeOpacity={1} style={[styles.container, { flexDirection, backgroundColor }]} onPress={toggle}>
                <Text style={textStyle}>{selectedSubject}</Text>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <Icon type='font-awesome' name='sort-down' />
                </Animated.View>
            </TouchableOpacity>
            <Animated.ScrollView
                nestedScrollEnabled
                style={[styles.selectItems, { height, backgroundColor, transform: [{ translateY: -height / 2 + 55 }, { scaleY }, { translateY: height / 2 + 10 }] }]}
            >
                <View>
                    {
                        values.map((subject, key) => <Option text={subject} key={key} />)
                    }
                </View>
            </Animated.ScrollView>
        </View>
    );
}

const shadowStyle = (elevation: number) => {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation
    };
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 25,
        marginBottom: 20,
        backgroundColor: 'white',
        ...shadowStyle(4),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selectItems: {
        position: 'absolute',
        left: 5,
        backgroundColor: 'white',
        zIndex: 10,
        ...shadowStyle(3),
        width: '100%'
    },
    option: {
        height: 60,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 25
    }
})
