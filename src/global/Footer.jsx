import "../css/Footer.css";

function Footer() {
    return (
    <div className="containerfooter">
      <div className="upper">
        <div className="row1">
          <div className="infocaption">Võta meiega ühendust</div>
          <br/>
          <div className="extrainfo">Email: jammieesti@gmail.com</div>
          <div className="extrainfo">Facebook: Jämmi</div>
        </div>
        <div className="row2"></div>
        <div className="row3">
         <div className="infocaption">Meie missioon</div>
         <br/>
         <div className="extrainfo">Meie eesmärgiks on iga kliendi rahulolu. 
         Meie usume, et kõik inimesed väärivad täpselt nii mugavaid, pehmeid
         ja soojust toovaid riideid nagu seda on Jämmikad.</div>

        </div>
      </div>
      {/* <div className="footer">
        <div className="footerbox">
          <div className="extrainfo">
            Copyright @ 2023 Erik Ertmann
          </div>
        </div>
        <div className="footerbox rtl">
          <div className="extrainfo">
            Jämmi corp
          </div>
        </div>
      </div> */}
    </div>  
    );
}

export default Footer;