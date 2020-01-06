import React from "react";
import { useForm } from "react-hook-form";

const CustomForm = () => {
  const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <input name={label} ref={register({ required })} />
    </>
  );
  const Select = React.forwardRef(({ label, register }, ref) => (
    <>
      <label>{label}</label>
      <select name={label} ref={ref}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" ref={register} />
      <input type="submit" />
    </form>
  );
};
export default CustomForm;
