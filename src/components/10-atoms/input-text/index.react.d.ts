import React from 'react';

export interface AXAInputTextProps {
  refId?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string;
  error?: string;
  type?: string;
  info?: string;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  checkMark?: boolean;
  maxLength?: number;
  counter?: string;
  counterMax?: string;
  isReact?: boolean;
  className?: string;
  onFocus?: (e?: FocusEvent) => void;
  onBlur?: (e?: FocusEvent) => void;
  onChange?: (e: { target: HTMLInputElement }) => void;
}

declare function createAXAInputText(
  createElement: typeof React.createElement
): React.ComponentType<AXAInputTextProps>;

export default createAXAInputText;
