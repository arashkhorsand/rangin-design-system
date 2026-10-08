/**
 * SMS one-time-code boxes for mobile-number login. Always fills LTR; auto-submits on the last digit.
 * @startingPoint section="Forms" subtitle="5-digit SMS verification code" viewport="700x180"
 */
export interface OtpInputProps {
  /** Digit count, default 5. */
  length?: number;
  /** Controlled value (Latin or Persian digits). */
  value?: string;
  defaultValue?: string;
  onChange?: (code: string) => void;
  /** Fires when every box is filled — submit here; no separate button. */
  onComplete?: (code: string) => void;
  label?: string;
  /** Resend countdown in seconds; at 0 the «ارسال دوباره» button appears. */
  seconds?: number;
  onResend?: () => void;
  /** Shows «ویرایش شماره» (always available). */
  onEditNumber?: () => void;
}
export declare function OtpInput(props: OtpInputProps): JSX.Element;
