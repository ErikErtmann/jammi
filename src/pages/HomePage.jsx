import "../css/HomePage.css";
import Gallery from "../components/Gallery";

function HomePage() {
    return (
    <div className="Content">

      <div className="UpperBox">
        <div className="LogoAndName">
          <img className="logo" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-9/322269394_1825245277825651_8445673729527555287_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UOs8Pdk9rKIAX9EcZ8c&_nc_ht=scontent-arn2-1.xx&oh=03_AdR2-yZbpeoCwDtDWhBP3jrVxcVobaKgQE0v1eB6e36dZA&oe=63E602DD" alt="ERROR"/>
          <div className="name">Jämmi</div>
        </div>
        <div className="SloganBox">  
          <div className="Slogan">
            Jämmikad - kingi endale ja oma lähedastele mugavustunne. 
          </div>
        </div>
      </div> 
      <div className="SentenceBox">
        <div className="SentenceFont">
            "Jämmi järgib põhjamaist disaini ning loob armastusega valmistatud unikaalseid 
            tooteid. Jämmi toodetega toetad kodumaist käsitööd ning aitad tõestada, et stiil 
            võib olla ka loodussõbralik." - Jämmi disainer
        </div>
      </div>
      <div className="MedBox">
        <div className="MedBoxCaption">
            TOOTEVALIK
        </div>
        <div className="Products">
          <div>
            <Gallery />
          </div>
          <div className="MedBoxCaption">
            Lisame peagi uusi tooteid!
          </div>
        </div>

      </div>
    </div>    
    );
}

export default HomePage;