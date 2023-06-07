import * as React from "react";
import { useThrottle } from "@uidotdev/usehooks";
import "./App.css"

export default function App() {
  const [val, setVal] = React.useState("");
  const throttledValue = useThrottle(val);

  return (
    <section>
      <h1 style={{padding:"5px", justifyContent:"center", alignItems:"center",display:"flex",flexDirection:"row", border:"3px solid transparent",boxSizing:"border-box", borderRadius:"15px", backgroundColor:"ThreeDShadow", color:"Background", }}>useThrottle</h1>
      <input
        placeholder="Type some text"
        style={{ background: "var(--charcoal)" }}
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <p style={{color:"darkmagenta"}}>Val: {val}</p>
      <p style={{color:"ButtonText", fontSize:"35px"}}>Throttled: {throttledValue}</p>
    </section>
  );
}