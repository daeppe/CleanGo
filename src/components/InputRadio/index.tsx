import React from "react";
import { ReactNode } from "react";

import { Item, RadioButton, CardCategory, CustomText } from "./style";

interface InputRadioProps {
  name: string;
  value: string;
  selected: boolean;
  children: ReactNode;
  handleSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRadio = ({
  name,
  value,
  selected,
  children,
  handleSelectChange,
  ...rest
}: InputRadioProps) => {
  return (
    <Item>
      <RadioButton
        onChange={(e) => handleSelectChange(e)}
        type="radio"
        name={name}
        value={value}
        checked={selected}
        {...rest}
        required
      />
      <CardCategory>
        <CustomText selected={selected}>{children}</CustomText>
      </CardCategory>
    </Item>
  );
};

export default InputRadio;
