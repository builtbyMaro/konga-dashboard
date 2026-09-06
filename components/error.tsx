type Props = {
  error: string;
  retry: () => void;
};

const ErrorPage = ({ error, retry }: Props) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-dvw h-dvh">
      <h1 className="text-2xl text-[#535D6C]">{error}</h1>
      <button
        onClick={retry}
        className="px-4 py-2 bg-[#ed017f] text-white rounded cursor-pointer"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
