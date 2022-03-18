import { Link } from "react-router-dom";

const footerLinks = [
  {
    name: "Category 1",
    links: [
      {
        title: "Category 1 Link 1",
        url: "#",
      },
      {
        title: "Category 1 Link 2",
        url: "#",
      },
      {
        title: "Category 1 Link 3",
        url: "#",
      },
      {
        title: "Category 1 Link 4",
        url: "#",
      },
      {
        title: "Category 1 Link 5",
        url: "#",
      },
    ],
  },
  {
    name: "Category 2",
    links: [
      {
        title: "Category 2 Link 1",
        url: "#",
      },
      {
        title: "Category 2 Link 2",
        url: "#",
      },
      {
        title: "Category 2 Link 3",
        url: "#",
      },
      {
        title: "Category 2 Link 4",
        url: "#",
      },
      {
        title: "Category 2 Link 5",
        url: "#",
      },
    ],
  },
  {
    name: "Category 3",
    links: [
      {
        title: "Category 3 Link 1",
        url: "#",
      },
      {
        title: "Category 3 Link 2",
        url: "#",
      },
      {
        title: "Category 3 Link 3",
        url: "#",
      },
      {
        title: "Category 3 Link 4",
        url: "#",
      },
      {
        title: "Category 3 Link 5",
        url: "#",
      },
    ],
  },
];

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="text-sm text-gray-600">
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Link
              </Link>{" "}
              ·{" "}
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                And another
              </Link>
            </div>
          </div>

          {footerLinks &&
            footerLinks.map((category: any) => (
              <div key={category.name} className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h6 className="text-gray-800 font-medium mb-2">
                  {category.name}
                </h6>
                <ul className="text-sm">
                  {category.links.map((link: any) => (
                    <li key={link.title} className="mb-2">
                      <Link
                        to={link.url}
                        className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Last block</h6>
            <p className="text-sm text-gray-600 mb-4">
              Here we ask people to signup to a newsletter
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
