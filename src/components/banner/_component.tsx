import banner from "../../assets/images/banner.jpg";
import logo from "../../assets/images/logo.png";
import { bannerLinks, socialLinks } from "../../core/data";
import close from "../../assets/icons/email.svg";

const Banner = () => {
  return (
    <>
      <div className="relative text-white">
        <img
          className="object-cover w-full h-screen brightness-50"
          src={banner}
          alt="banner"
        />
        <div className="absolute top-0 w-full">
          <div className="flex items-center justify-between max-sm:hidden">
            <a href="/">
              <img className="w-10 h-10" src={logo} alt="logo" />
            </a>
            <div>
              {bannerLinks.map((link: any, idx: number) => (
                <a className="mr-6" key={idx} href={link.link}>
                  <small className="text-sm">{link.title}</small>
                </a>
              ))}
            </div>
            <div className="flex mr-3">
              {socialLinks.map((soc: any, idx: number) => (
                <a
                  key={idx}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-5 h-5 mr-2" src={soc.icon} alt="img" />
                </a>
              ))}
            </div>
          </div>

          {/* ******************* Mobile navigation ********************** */}
          <nav className=" md:hidden flex justify-between items-center md:max-w-[1700px] py-[13px] mx-auto">
            <h3 className="text-white">GH Beauty Logo</h3>
            <a
              className="me-1.5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-offcanvas-toggle
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img className="w-5" src={close} alt="" />
            </a>

            <div
              className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
              tabIndex={-1}
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              data-twe-offcanvas-init
            >
              <div className="flex items-center justify-between p-4 text-black">
                <h5
                  className="mb-0 font-semibold leading-normal"
                  id="offcanvasExampleLabel"
                >
                  Menus
                </h5>
                <button
                  type="button"
                  className="box-content border-none rounded-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  data-twe-offcanvas-dismiss
                  aria-label="Close"
                >
                  <span className="[&>svg]:h-6 [&>svg]:w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex-grow p-4 overflow-y-auto text-black">
                {bannerLinks.map((link: any, idx: number) => (
                  <a className="mr-6" key={idx} href={link.link}>
                    <small className="text-sm">{link.title}</small>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex flex-col items-center justify-center mt-96">
            <h3 className="text-4xl md:text-6xl">Tantalizing Foods</h3>
            <small className="text-xl text-red-600">Order. Eat. Love.</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
