import { useState } from "react";

export default function useIncrement({
  initialValue = 0,
  max = Infinity,
  min = -Infinity,
}) {
  const [count, setCount] = useState(initialValue);

  const functionIncrement = () =>
    setCount((prev) => (prev < max ? prev + 1 : prev));
  const functionDecrement = () =>
    setCount((prev) => (prev > min ? prev - 1 : prev));

  return { count, increment: functionIncrement, decrement: functionDecrement };
}
