import MatchDate from "./MatchDate";
import MatchDay from "./MatchDay";
import MatchTime from "./MatchTime";

const MatchSchedule = ({ month, date, day, time }) => {
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      <MatchDate month={month} date={date} />
      <div>
        <MatchDay day={day} />
        <MatchTime time={time} />
      </div>
    </div>
  );
};

export default MatchSchedule;
