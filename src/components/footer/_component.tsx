import logo from "../../assets/images/logo.png";
import { addressItems, iconColor, socialLinks } from "../../core/data";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="flex justify-between py-20 mt-20 max-sm:flex-col max-sm:justify-center max-sm:px-8 px-80 bg-slate-100">
        <div>
          <h3 className="text-2xl underline">Address</h3>
          {addressItems.map((addressItem: any, index: number) => (
            <ul key={index}>
              <a target="_blank" href={addressItem.link}>
                <li className="flex items-center">
                  <img
                    className="w-5 mr-2"
                    style={{
                      filter: iconColor,
                    }}
                    src={addressItem.icon}
                  />
                  {addressItem.title}
                </li>
              </a>
            </ul>
          ))}
        </div>
        <div className="max-sm:hidden vertical-line"></div>

        <div className="max-sm:mt-16">
          <img src={logo} className="mb-8 w-14" />
          <div className="flex">
            {socialLinks.map((socialLink: any, index: number) => (
              <a key={index} target="_blank" href={socialLink.link}>
                <img className="w-6 mr-4" src={socialLink.icon} />
              </a>
            ))}
          </div>

          <p>&copy; {date.getFullYear()} Tantalizing Foods</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
