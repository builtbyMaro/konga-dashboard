type Props = {
  error: string;
  retry: () => void;
};

const ErrorPage = ({ error, retry }: Props) => {
  return (
    <div>
      <h1>{error}</h1>
      <button onClick={retry}>Retry</button>
    </div>
  );
};

export default ErrorPage;
