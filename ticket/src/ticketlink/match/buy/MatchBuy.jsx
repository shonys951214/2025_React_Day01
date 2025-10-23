const MatchBuy = () => {
  const buy = () => {
    console.log("구매완료!");
  };

  return (
    <button
      onClick={buy}
      style={{
        padding: "10px 40px",
        color: "white",
        backgroundColor: "#fa2828",
        border: "none",
        borderRadius: "20px",
      }}
    >
      예매하기
    </button>
  );
};

export default MatchBuy;
