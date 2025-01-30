import aboutUs from "../../assets/images/about-us.jpg";

const AboutUs = () => {
  return (
    <>
      <div id="about-us" className="flex justify-center w-full ">
        <div className="flex w-1/2 mt-24 max-sm:w-full max-sm:flex-col">
          <div className="w-[16rem]  max-sm:w-full">
            <img
              className="object-cover w-96 max-sm:w-full"
              src={aboutUs}
              alt="about-us"
            />
          </div>
          <div className="flex justify-between w-full p-10 h-80 bg-slate-200">
            <div className="">
              <h3 className="mb-8 text-2xl italic">about us</h3>
              <p className="md:hidde">
                Welcome to Tantalizing Foods, a family-owned restaurant located
                in our bustling city. Our mission is to provide our guests with
                an unforgettable dining experience that is both comfortable and
                delicious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
