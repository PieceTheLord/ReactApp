import { BaseInput } from "../components/ui/inputs/BaseInput/BaseInput";
import { BaseLabel } from "../components/ui/labels/baseLabels/BaseLabel";
import { BigLabel } from "../components/ui/labels/bigLabels/BigLabel";

function App() {
  return (
    <>
      <BigLabel>Auth/Login</BigLabel>
      <BaseInput>name</BaseInput>
      <BaseInput>email</BaseInput>
      <BaseInput>password</BaseInput>
      <BaseLabel>There's no other way</BaseLabel>
    </>
  );
}

export default App;
