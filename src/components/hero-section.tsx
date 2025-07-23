import Image from "next/image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="w-full mt-32 h-screen">
      <div className="flex flex-col content-center items-center">
        <img
          src="profile.jpg"
          alt={"profile"}
          className="w-40 h-40 border-white border-4 object-cover object-top rounded-full"
        />
        <div className="mt-16">
          <a className="text-4xl ">Hi, I am Rajeshwory</a>
          <WavingHandIcon className="text-4xl text-yellow-500 ml-4" />
        </div>
        <div className="text-3xl mt-10">
          <a>I am a frontend developer based in Kathmandu, Nepal.</a>
        </div>

        <Button
          variant="contained"
          size="large"
          color="secondary"
          className="mt-10"
          href="resume.pdf"
        >
          View Resume
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
