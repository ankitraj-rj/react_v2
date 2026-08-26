import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.error(err);

  return (
    <div className="error-page">
      <h1>Oops !!!</h1>

      <h2>
        Something went wrong
      </h2>

      <h3>
        {err?.status} :{" "}
        {err?.statusText ||
          "Unknown Error"}
      </h3>
    </div>
  );
};

export default Error;