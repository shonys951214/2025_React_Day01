const Profile = ({ src }) => {
  return (
    <div style={{ width: "50px", height: "50px", borderRadius: "9999px" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "9999px",
        }}
        src={src}
        alt=""
      />
    </div>
  );
};

export default Profile;
