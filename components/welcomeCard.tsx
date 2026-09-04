type props = {
  balance: number | undefined;
};

const WelcomeCard = ({ balance }: props) => {
  return (
    <div>
      <p>Hey Princewill, Welcome Back</p>
      <h1>{`₦ ${balance}`}</h1>
    </div>
  );
};

export default WelcomeCard;
