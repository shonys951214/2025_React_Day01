import Name from "./funcProps/Name";

const FuncProps = () => {
  return (
    <>
      <Name
        name={"손정우"}
        func={() => {
          console.log("손정우 ㅎㅇㅎㅇ");
        }}
      />
      <Name
        name={"신여진"}
        func={() => {
          alert("신여진 ㅎㅇㅎㅇ");
        }}
      />
      <Name
        name={"이영철"}
        func={() => {
          console.log("이영철 ㅎㅇㅎㅇ");
        }}
      />
      <Name
        name={"전상원"}
        func={() => {
          console.log("전상원 ㅎㅇㅎㅇ");
        }}
      />
      <Name name={"권유나"} />
    </>
  );
};

export default FuncProps;
