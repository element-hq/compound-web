import { default as React } from '../../../node_modules/react';
import { Size } from '../../utils/size';
type Icon = React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref" | "children"> & React.RefAttributes<SVGSVGElement>>;
interface SwitchProps<LeftValue extends string, RightValue extends string> {
    name: string;
    leftIcon: Icon;
    leftLabel: string;
    leftValue: LeftValue;
    rightIcon: Icon;
    rightLabel: string;
    rightValue: RightValue;
    value: LeftValue | RightValue;
    onChange: (value: LeftValue | RightValue) => void;
    size?: Size & ("lg" | "md");
}
export declare const Switch: <LeftValue extends string = string, RightValue extends string = string>({ name, leftIcon: LeftIcon, leftLabel, leftValue, rightIcon: RightIcon, rightLabel, rightValue, value, className, onChange, size, ...fieldSetProps }: SwitchProps<LeftValue, RightValue> & Omit<React.HTMLAttributes<HTMLFieldSetElement>, "onChange">) => React.ReactElement;
export {};
//# sourceMappingURL=Switch.d.ts.map