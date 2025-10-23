const Button = ({ followState }) => {
  const obj = {
    follow: {
      msg: "Message",
      color: "black",
      backgroundColor: "white",
      border: "2px solid #efefef",
    },
    unFollow: {
      msg: "Follow",
      color: "white",
      backgroundColor: "#3797EF",
      border: "2px solid #3797EF",
    },
  };

  return (
    <button
      style={{
        padding: "6px 24px",
        borderRadius: "8px",
        color: obj[followState].color,
        backgroundColor: obj[followState].backgroundColor,
        border: obj[followState].border,
      }}
    >
      {obj[followState].msg}
    </button>
  );
};

export default Button;
