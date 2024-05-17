import Image from "next/image";

const About = () => {
  return (
    <section className="w-full h-screen" id="about">
      <div>
        <div className="text-center">
          <a className="text-5xl font-bold">About Me</a>
        </div>
        <div className="w-full flex flex-row mt-5">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <label>
              In the dynamic world of web development, I stand as a dedicated
              frontend developer with a passion for crafting immersive digital
              experiences using React. With a keen eye for detail and a
              commitment to user-centric design, I bring forth a blend of
              creativity and technical prowess to breathe life into static
              designs. Fueled by a relentless pursuit of excellence, I thrive in
              collaborative environments, leveraging my communication skills to
              seamlessly integrate feedback and drive projects forward.
            </label>
            <br />
            <br />
            <label>
              I am also a devoted nature lover. Immersed in the embrace of
              nature's beauty,I cherish every moment spent exploring the great
              outdoors, from the majestic mountains to the serene forests and
              the mesmerizing depths of the riversWhether hiking through rugged
              terrain, capturing the ethereal beauty of a sunrise through my
              lens, or simply basking in the symphony of bird songs, I am
              endlessly captivated by the intricacies of the natural world. My
              connection to nature serves as a source of inspiration in all
              aspects of my life, nurturing my creativity, fostering
              mindfulness, and instilling a deep sense of humility in the
              presence of something far greater than ourselves..
            </label>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/person.png"
              alt="person"
              width={400}
              height={600}
              className="w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
