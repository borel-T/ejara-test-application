import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>No such page! 404</h1>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
