import { ChevronRight } from "lucide-react";

const MatchTeams = ({ homeTeam, awayTeam }) => {
  return (
    <div>
      <button
        style={{
          display: "flex",
          border: "1px solid orange",
          borderRadius: "14px",
          color: "orange",
        }}
      >
        취소표대기
        <ChevronRight />
      </button>
      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        <div>{homeTeam}</div>
        <span>VS</span>
        <div>{awayTeam}</div>
      </div>
    </div>
  );
};

export default MatchTeams;
