import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { StyledElement } from './style';

const { Option } = Select;

interface TComponentProps {
  handleChange: (value: string) => void;
  options: string[];
  label: string;
}

const DropDown: React.FC<TComponentProps> = ({
  handleChange,
  options,
  label,
}) => {
  return (
    <StyledElement>
      <p>{label}</p>
      <Select
        defaultValue={options[0]}
        style={{ width: 120, margin: 20 }}
        onChange={handleChange}
      >
        {options.map((value) => (
          <Option value={value} key={value}>
            {value}
          </Option>
        ))}
      </Select>
    </StyledElement>
  );
};

export default DropDown;
