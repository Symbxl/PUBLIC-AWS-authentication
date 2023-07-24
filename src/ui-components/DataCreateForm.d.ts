/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DataCreateFormInputValues = {
    name?: string;
    address?: string;
    zipcode?: string;
};
export declare type DataCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    zipcode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataCreateFormOverridesProps = {
    DataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    zipcode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DataCreateFormProps = React.PropsWithChildren<{
    overrides?: DataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DataCreateFormInputValues) => DataCreateFormInputValues;
    onSuccess?: (fields: DataCreateFormInputValues) => void;
    onError?: (fields: DataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DataCreateFormInputValues) => DataCreateFormInputValues;
    onValidate?: DataCreateFormValidationValues;
} & React.CSSProperties>;
export default function DataCreateForm(props: DataCreateFormProps): React.ReactElement;
