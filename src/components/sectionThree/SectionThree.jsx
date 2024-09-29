import Container from "../container/Container";
import IconsCard from "../IconsCard/IconsCard";

const backgroundSection = {
    backgroundColor: "#f9daed",
    clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
  };

const SectionThree = () => {
  return (
    <div style={backgroundSection} className="py-20 mb-20  ">
      <Container>
        <div className=" mb-16  max-sm:block max-sm:mt-24 max-sm:mx-10 ">
          <h2 className="text-3xl max-sm:mb-6 mt-28 ">
            Trusted Among Industry Leaders
          </h2>
          <p className="text-sm mt-9 ">
          I'm a paragraph. Click here to add your own text and edit me.
          <br/> It’s easy. Just click “Edit Text” or double click me to add your
          <br/> own content and make changes to the font.
          </p>
        </div>
        <IconsCard/>
        </Container>
    </div>
  );
};

export default SectionThree;
