import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex text-center flex-col gap-12 items-center justify-center">
      <h1 className="text-3xl font-semibold">Oops!</h1>
      <p className="text-medium">Sorry, an unexpected error has occurred.</p>
      <p className="text-medium">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
