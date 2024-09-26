import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Paragraph from "../../components/paragraph/Paragraph";
import SectionFive from "../../components/sectionFive/SectionFive";
import SectionFour from "../../components/sectionFour/SectionFour";
import SectionOne from "../../components/sectionOne/SectionOne";
import SectionSix from "../../components/sectionSix/SectionSix";
import SectionThree from "../../components/sectionThree/SectionThree";
import SectionTwo from "../../components/sectionTwo/SectionTwo";


const Home = () => {
    return ( 
        <>
            
            <Navbar/>
            <Header/>
            <Paragraph/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <Footer/>
            
        </>
     );
}
 
export default Home;