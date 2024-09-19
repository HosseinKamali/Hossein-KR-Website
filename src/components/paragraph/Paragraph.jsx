import Container from "../container/Container";

const backgroundSection = {
  backgroundColor: "#ffc11a",
  clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 100%)",
};

const Paragraph = () => {
  return (
    <div style={backgroundSection} className="w-full h-[600px] flex items-center">
 <Container>
      <div className="flex justify-center items-center mb-10">
        <h2 className="text-5xl mr-10">
          With the Right <br /> Software, Great <br /> Things Can Happen
        </h2>
        <p className="text-lg ml-10">
          I'm a paragraph. Click here to add your own text and edit me.
          <br /> It’s easy. Just click “Edit Text” or double click me to add
          your
          <br />
          own content and make changes to the font. Feel free to drag
          <br /> and drop me anywhere you like on your page. I’m a great place
          <br /> for you to tell a story and let your users know a little more
          about you.
        </p>
      </div>
    </Container>
    </div>
   
  );
};

export default Paragraph;
