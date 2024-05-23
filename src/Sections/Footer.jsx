import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="#">
            <img width={150} height={46} src={footerLogo} alt="" />
          </a>
          <p className="info-text m-auto mt-4 max-w-lg text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            tempora quos perferendis voluptatem dignissimos maxime quam quod
            dicta numquam at!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="font-montserrat text-2xl mt-5 text-white">
                {section.title}
              </h4>
              {section.links.map((link) => (
                <li
                  key={link.name}
                  className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:textslate-gray list-none cursor-pointer"
                >
                  <a href="#">{link.name}</a>
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="#"
            width={20}
            height={20}
            className="rounded-ful m-0"
          />

          <p>Cpoyright . All rights reserved</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
