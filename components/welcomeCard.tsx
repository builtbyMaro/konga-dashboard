type props = {
  balance: number | undefined;
};

const WelcomeCard = ({ balance }: props) => {
  return (
    <div className="flex flex-col justify-end col-span-1 sm:col-span-3 border-[1.5px] border-[#ed017f] w-full h-20 p-2 bg-white rounded">
      <p className="text-[#535D6C]">Welcome Back, Princewill</p>
      <h1 className="font-bold text-2xl">{`₦ ${balance?.toLocaleString()}`}</h1>
    </div>
  );
};

export default WelcomeCard;
