import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className=" fo mt-3 pb-4 text-center  ">
        <h6 className="pt-3">
          <Logo ancho={30} />© Cervelar 2024
        </h6>
      </div>
    </>
  );
};

export default Footer;
