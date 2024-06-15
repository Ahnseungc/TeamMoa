import { SpinnerLayout, SpinnerAtom } from "./styles";

const Spinner = () => {
  return (
    <SpinnerLayout>
      <SpinnerAtom src="/LoadingSpinner.png" alt="/" />
    </SpinnerLayout>
  );
};

export default Spinner;
