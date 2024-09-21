import { useState } from "react";
import Container from "../container/Container";
import { offers } from "../../../data/data";

const SectionOne = () => {
  const [cards, setCards] = useState(offers);

  return (
    <Container>
      <div className="mt-12 mb-12 ml-24">
        <h2 className="text-4xl mb-8">What We Offer</h2>
        <p className="text-lg">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy.
          <br /> Just click “Edit Text” or double click me to add your own
          content and
          <br /> make changes to the font.
        </p>
      </div>
      
      <div className="flex mb-10 max-sm:block flex-wrap justify-around sm:mx-20">
        {cards.map((card) => (
          <div key={card.id} className="w-[23.5%] max-sm:w-[65%] max-sm:mb-20 ">
            <img
              src={card.image}
              alt=""
              className="w-full border-2 border-black rounded-xl"
            />
            <h3 className="text-2xl font-semibold mt-6 mb-6 break-words w-[80%]">
              {card.title}
            </h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      
    
    </Container>
  );
};

export default SectionOne;
