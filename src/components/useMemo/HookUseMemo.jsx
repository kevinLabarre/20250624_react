import { WithoutUseMemo } from "./WithoutUseMemo";
import { WithUseMemo } from "./WithUseMemo";

export const HookUseMemo = () => {
  return (
    <>
      <h1>Use memo</h1>
      <WithoutUseMemo />
      <WithUseMemo />
    </>
  );
};
