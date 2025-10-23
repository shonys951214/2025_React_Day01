import Count from "./Count";
import Label from "./Label";

const Status = ({ count, contents }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Count count={count} />
      <Label contents={contents} />
    </div>
  );
};

export default Status;
