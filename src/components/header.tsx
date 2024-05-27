import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <section className="w-full sticky top-5 backdrop-blur-3xl p-2">
      <div className="flex flex-row justify-between items-center">
        <a className=" text-4xl font-semibold">Rajeshwory Shrestha</a>
        <div className="text-2xl gap-16 flex">
          <a className="hover:cursor-pointer hover:text-blue-300" href="#about">
            About
          </a>
          <a
            className="hover:cursor-pointer hover:text-blue-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:cursor-pointer hover:text-blue-300"
            href="#skills"
          >
            Skills
          </a>
        </div>
        {/* icon section */}
        <div className="flex gap-10 justify-end">
          <InstagramIcon className="text-white text-4xl hover:cursor-pointer hover:text-blue-300" />
          <GitHubIcon className="text-white text-4xl hover:cursor-pointer hover:text-blue-300" />
        </div>
      </div>
    </section>
  );
};

export default Header;
