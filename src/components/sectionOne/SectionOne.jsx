import { useState ,useEffect } from "react";
import Container from "../container/Container";
import { offers } from "../../../data/data";
import { motion } from 'framer-motion';

const SectionOne = () => {
  const [cards, setCards] = useState(offers);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetElement = document.getElementById('animateElement');
      const targetPosition = targetElement.getBoundingClientRect().top;

      if (targetPosition < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <div className="mt-16 mx-14 ">
        <h2 className="text-3xl mb-7">What We Offer</h2>
        <p className="text-sm leading-6">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy.
          <br /> Just click “Edit Text” or double click me to add your own
          content and
          <br /> make changes to the font.
        </p>
      </div>
      
      <motion.div 
        id="animateElement"
        initial={{ opacity: 0, y: 100 }} 
        animate={isVisible ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 1 }}
       
        
      className="flex mb-10 max-sm:block flex-wrap justify-between mx-14 mt-14 ">
        {cards.map((card) => (
          <div key={card.id} className="w-[24%] max-sm:w-[65%] max-sm:mb-20 ">
            <img
              src={card.image}
              alt=""
              className="w-full border-2 border-black rounded-xl"
            />
            <h3 className="text-[17px] font-semibold mt-6 mb-3 break-words w-[80%]">
              {card.title}
            </h3>
            <p className="text-sm leading-5">{card.description}</p>
          </div>
        ))}
      </motion.div>
      
    
    </Container>
  );
};

export default SectionOne;
