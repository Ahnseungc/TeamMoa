export interface InputType {
  placeholder: string;
  readonly: boolean;
  disabled: boolean;
  value: string;
  error: string;
  id: string;
  type: "text" | "password";
  inputtype: "text" | "password" | "website" | "textheader";
}

export interface TextAreaType {
  Areatype: "default" | "bordernone";
  placeholder: string;
}
