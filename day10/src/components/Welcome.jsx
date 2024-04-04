const Welcome = ({ name = "조성경", isMember = false }) => {
  return (
    <div>
      {isMember ? `${name}님 다시 오셨군요.` : `${name}님 가입하시겠어요?`}
    </div>
  );
};

export default Welcome;
