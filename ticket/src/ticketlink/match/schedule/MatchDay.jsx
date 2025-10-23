const MatchDay = ({ day }) => {
  return (
    <div style={{ fontSize: "12px", color: day == "일" ? "red" : "grey" }}>
      ({day})
    </div>
  );
};

export default MatchDay;
