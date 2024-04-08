export interface InputType {
  placeholder: string;
  readonly: boolean;
  disabled: boolean;
  value: string;
  error: string;
  type: "text" | "password";
}
