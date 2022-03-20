import { Link } from "react-router-dom";
import Section from "../../components/UI/Section/Section";

function NotFound() {
  return (
    <Section
      title="This is not the page you are looking for!"
      description="Don't know how you ended up here really..."
    >
      <Link className="btn bg-indigo-500 text-white flex justify-center self-center" to="/">Go back, silly person</Link>
    </Section>
  );
}

export default NotFound;
