import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>This is not the page you are looking for!</h1>
      <Link to="/">Go back, silly person</Link>
    </>
  );
}

export default NotFound