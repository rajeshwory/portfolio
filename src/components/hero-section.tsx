import Image from "next/image";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="w-full mt-32 h-screen">
      <div className="flex flex-col content-center items-center">
        <img
          src={
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"profile"}
          className="w-36 h-36 border-white border-4 object-cover object-top rounded-full"
        />
        <div className="mt-10">
          <a className="text-4xl ">Hi, I am Rajeshwory</a>
          <WavingHandIcon className="text-4xl text-yellow-500 ml-4" />
        </div>
        <a className="text-3xl mt-1">
          I am a frontend developer based in Kathmandu, Nepal.
        </a>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className="mt-5"
        >
          View Resume
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
