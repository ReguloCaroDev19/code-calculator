import { ReactComponent as Logo } from "../../assets/img/4-Band_Resistor.svg";

export const Resistance = () => {
  return (
    <div className="flex justify-center">
      <h1 className="text-4xl">Calculator of resistance</h1>
      <img
        alt="colorResistance"
        src={"/src/assets/img/4-Band_Resistor.png"}
        className=""
      ></img>
      <select>
        <option></option>
      </select>
    </div>
  );
};
