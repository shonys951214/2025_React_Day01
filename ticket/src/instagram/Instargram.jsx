import Button from "./Button";
import Contents from "./Contents";
import Profile from "./Profile";

const Instargram = ({ src, name, followedDate, followState }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Profile src={src} />
      <Contents name={name} followedDate={followedDate} />
      <Button followState={followState} />
    </div>
  );
};

export default Instargram;
