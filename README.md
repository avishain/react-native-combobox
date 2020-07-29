# react-native-combobox
![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-blue.svg) &nbsp;&nbsp;
![MIT License](https://img.shields.io/npm/l/react-native-range-slider-expo?color=red)
### Customizable combo-box for react native apps <br/><br/>

<!-- [Please let me know if you encounter any issues or if you have any imporvements suggestion, comments, etc..](https://github.com/D10S60948/react-native-range-slider-expo/issues) -->

<br/><br/>
## Getting started
`npm i react-native-range-slider-expo`

<br/><br/>

## Usage
#### Example - images

<div style="display:flex;flex-direction:row">
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1595960302/image2_eqbpiw.png" style="height:100%;width:100%"/>
  <img src="https://res.cloudinary.com/dexts7jfo/image/upload/v1595960364/image_daoab0.png" style="height:100%;width:100%"/>
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
                rtl={false}
                fontSize={25}
            />
            <Text>selected value:          {selectedValue}</Text>
        </View>
    );
```

<br/>

## API - RangeSlider (default import)
| Property | Type | Required | Default |
| :---     |:----:|  :-----: | :-----: | 
| min | number | yes | - |
| max | number | yes | - |
| fromValueOnChange | callback | yes | - |
| toValueOnChange | callback | yes | - |
| step | number | no | 1 |
| styleSize | string ( 'small' \| 'medium' \| 'large' )  | no | 'medium' |
| fromKnobColor | string (color) | no | '#00a2ff' |
| toKnobColor | string (color) | no | '#00a2ff' |
| inRangeBarColor | string (color) | no | 'rgb(100,100,100)' |
| outOfRangeBarColor | string (color) | no | 'rgb(200,200,200)' |
| valueLabelsTextColor | string (color) | no | 'white' |
| valueLabelsBackgroundColor | string (color) | no | '#3a4766' |
| rangeLabelsTextColor | string (color) | no | 'rgb(60,60,60)' |
| showRangeLabels | boolean | no | true |
| showValueLabels | boolean | no | true |

<br/><br/>

## License
This project is licensed under the MIT License
