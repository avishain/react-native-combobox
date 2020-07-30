/// <reference types="react" />
interface ComboBoxProps {
    values: Array<string>;
    onValueSelect: (value: string) => void;
    fontFamily?: string;
    color?: string;
    fontSize?: number;
    backgroundColor?: string;
    defaultValue?: string;
    rtl?: boolean;
}
declare const _default: ({ values, onValueSelect, fontFamily, color, fontSize, defaultValue, backgroundColor, rtl }: ComboBoxProps) => JSX.Element;
export default _default;
