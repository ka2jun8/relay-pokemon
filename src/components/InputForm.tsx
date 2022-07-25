import { useState } from "react";

type Props = {
  defaultValue: string;
  onChange?: () => void;
  onSubmit?: (value: string) => void;
};

export const InputForm: React.FC<Props> = ({
  defaultValue,
  onChange,
  onSubmit,
}) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <form method="GET">
      <input
        value={value}
        name="name"
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange();
        }}
      />
      <button
        type="button"
        onClick={() => {
          onSubmit && onSubmit(value);
        }}
      >
        Change
      </button>
    </form>
  );
};
