import { BsMedium, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center mt-14 h-16 p-2 lg:px-10 bg-secondary">
      <div>&copy; 2023 by Irfan Fitriandi</div>
      <div className="flex space-x-2 lg:space-x-4 text-sm lg:text-lg">
        <a href="https://medium.com/">
          <BsMedium className="text-xl" />
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram className="text-xl" />
        </a>
        <a href="https://github.com/irfanfitriandi">
          <BsGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/irfanfitriandi/" target="_blank">
          <BsLinkedin className="text-xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
