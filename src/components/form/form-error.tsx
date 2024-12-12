import React from "react";

interface Props {
  message: string;
}

const FormError = ({ message }: Props) => {
  return <div className="text-xs font-semibold text-red-500">{message}</div>;
};

export default FormError;
