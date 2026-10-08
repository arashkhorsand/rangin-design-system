import * as React from 'react';
/**
 * Text field with always-visible label above, help text and error state. 52px tall, 16px input text.
 * @startingPoint section="Forms" subtitle="Labelled text field with help, affix and error" viewport="700x240"
 */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string;
  help?: React.ReactNode;
  /** Error message; switches to danger border + icon and sets aria-invalid. */
  error?: React.ReactNode;
  /** Leading affix shown LTR, e.g. «+۹۸». */
  affix?: React.ReactNode;
  /** Use 'ltr' for mobile, postal code, card number, email. */
  dir?: 'ltr' | 'rtl';
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
