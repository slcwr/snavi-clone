import React, { useState } from 'react';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

export default function Input() {
  const [value, setValue] = useState(0);

  const handleChange = (val: number | undefined) => {
     return val;
  };

  return (
    <NumberInput
      aria-label="Demo number input"
      placeholder="Type a number…"
      value={value}
      onChange={(
        event:
          | React.FocusEvent<HTMLInputElement>
          | React.PointerEvent
          | React.KeyboardEvent,
        val: number | undefined
      ) => handleChange(val)}
    />
  );
}
