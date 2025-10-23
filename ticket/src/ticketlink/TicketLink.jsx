import Match from "./match/Match";

const TicketLink = () => {
  const data = [
    {
      month: "10월 ",
      date: "25일",
      day: "토",
      time: "14:00",
      homeLogo: "전북fc.png",
      awayLogo: "김천fc.png",
      homeTeam: "전북 fc",
      awayTeam: "김천상무 fc",
      stadiumName: "전주월드컵 경기장",
    },
    {
      month: "11월 ",
      date: "8일",
      day: "토",
      time: "14:00",
      homeLogo: "전북fc.png",
      awayLogo: "대전fc.png",
      homeTeam: "전북 fc",
      awayTeam: "대전 fc",
      stadiumName: "전주월드컵 경기장",
      openingTime: "2025.11.03(월) 11:00 ",
    },
    {
      month: "11월 ",
      date: "15일",
      day: "일",
      time: "16:00",
      homeLogo: "전북fc.png",
      awayLogo: "서울fc.png",
      homeTeam: "전북 fc",
      awayTeam: "서울 fc",
      stadiumName: "전주월드컵 경기장",
      openingTime: "2025.11.10(월) 11:00 ",
    },
  ];

  return (
    <>
      {data.map((v) => (
        <Match {...v} />
      ))}
    </>
  );
};

export default TicketLink;
