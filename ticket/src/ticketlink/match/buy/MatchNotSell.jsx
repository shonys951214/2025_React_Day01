const MatchNotSell = ({ openingTime }) => {
  const alerting = () => {
    alert("구매안된다고요!");
  };

  return (
    <button
      onClick={alerting}
      style={{
        padding: "10px 40px",
        color: "black",
        backgroundColor: "#ebebeb",
        border: "none",
        borderRadius: "20px",
      }}
    >
      {openingTime} 오픈예정
    </button>
  );
};

export default MatchNotSell;
