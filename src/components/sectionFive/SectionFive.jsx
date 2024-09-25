import Container from "../container/Container";
import PremiumCard from "../premiumCard/PremiumCard";

const SectionFive = () => {
  return (
    <div className="bg-sky-100 py-10 ">
      <Container>
        <div className="flex justify-between items-center">
        <div className="w-[40%]">
          <h2 className="text-4xl mb-10">Explore Our<br/> Pricing Options</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me.
            
            It’s easy. Just click “Edit Text” or double click me to add your
            
            own content and make changes to the font. I’m a great place for you
            
            to tell a story and let your users know a little more about you.
          </p>
          <button className="bg-black text-slate-50 py-[5px] px-[22px] text-lg font-semibold rounded-lg mt-10
          hover:bg-amber-500 hover:text-black border-2 border-black transition-all duration-300">See More</button>
        </div>
        <PremiumCard />
        </div>
     
      </Container>
    </div>
  );
};

export default SectionFive;
