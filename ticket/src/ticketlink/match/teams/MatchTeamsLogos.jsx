const MatchTeamsLogos = ({ homeLogo, awayLogo }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <div style={{ width: "30px", height: "30px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={homeLogo}
          alt=""
        />
      </div>
      <div style={{ color: "grey" }}>VS</div>
      <div style={{ width: "30px", height: "30px" }}>
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={awayLogo}
          alt=""
        />
      </div>
    </div>
  );
};

export default MatchTeamsLogos;
