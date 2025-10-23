import MatchBuy from "./buy/MatchBuy";
import MatchNotSell from "./buy/MatchNotSell";
import MatchSchedule from "./schedule/MatchSchedule";
import MatchStadium from "./schedule/MatchStadium";
import MatchTeams from "./teams/MatchTeams";
import MatchTeamsLogos from "./teams/MatchTeamsLogos";

const Match = (props) => {
  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        gap: "50px",
        alignItems: "center",
      }}
    >
      <MatchSchedule {...props} />
      <MatchTeamsLogos {...props} />
      <MatchTeams {...props} />
      <MatchStadium {...props} />
      {props.openingTime ? <MatchNotSell {...props} /> : <MatchBuy />}
    </div>
  );
};

export default Match;
