export interface ISelectOption<T>{
    label: string,
    value : T
}
export class SelectOption{
    public static getLabel<T>(option: ISelectOption<T>):string{
        return option.label
    }
}