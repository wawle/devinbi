"use client";

import { MouseEventHandler } from "react";

interface Props {
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const DotButton = ({ selected, onClick }: Props) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);
