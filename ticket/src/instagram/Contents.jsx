const Contents = ({ name = "no one", followedDate = 0 }) => {
  return (
    <div>
      <span style={{ fontWeight: "bold", marginRight: "5px" }}>{name}</span>
      started following you.
      <span style={{ color: "#e9e9e9" }}>
        {new Date().getDate() - followedDate}
      </span>
    </div>
  );
};

export default Contents;
