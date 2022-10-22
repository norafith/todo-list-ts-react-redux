interface CheckboxProps {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <input type={"checkbox"} checked={props.checked} />;
};

export default Checkbox;
