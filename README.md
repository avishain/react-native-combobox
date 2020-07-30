# react-native-combobox
![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-blue.svg) &nbsp;&nbsp;
![MIT License](https://img.shields.io/npm/l/react-native-range-slider-expo?color=red)
### Customizable combo-box for react native apps <br/><br/>

[Please let me know if you encounter any issues or if you have any imporvements suggestion, comments, etc..](https://github.com/D10S60948/react-native-combobox/issues) 

<br/><br/>
## Getting started
`npm i react-native-combobox`

<br/><br/>

## Usage
#### Example

<div style="display:flex;flex-direction:row">
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1596087000/ezgif.com-video-to-gif_rnao8h.gif" style="height:100%;width:100%"/>
</div>

#### Example - code

```javascript
import ComboBox from 'react-native-combobox';
```
```javascript
    const [selectedValue, setSelectedValue] = useState('');
    
    const values = [
        'option 1',
        'option 2',
        'option 3',
        'option 4',
        'option 5'
    ];

    return (
        <View style={{ flex: 1, paddingVertical: 80, paddingHorizontal: 40, justifyContent: 'space-between' }}>
            <ComboBox
                values={values}
                onValueSelect={setSelectedValue}
            />
            <Text>selected value:          {selectedValue}</Text>
        </View>
    );
```

<br/>

## API - Combobox (default import)
| Property | Type | Required | Default |
| :---     |:----:|  :-----: | :-----: | 
| values | array of string | yes | - |
| onValueSelect | callback | yes | - |
| fontFamily | string (font) | no | - |
| textColor | string (color) | no | - |
| backgroundColor | string (color) | no | - |
| fontSize | numbrer | no | - |
| defaultValue | string | no | ' ' |
| rtl | boolean | no | false |

<br/><br/>

## License
This project is licensed under the MIT License
