import React from 'react';
import '../../App.css';
import './Pages.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Statements() {
  return (
    <div className='page-container'>
      <Navbar />
      <div className='content'>
        <h1 className='title'>ETHICAL PRINCIPLES</h1>
        <div className='row'>
          <div className='column'>
            <ul className='guidance-list'>
              <li className='ethics-item'>
                We are committed to social justice in support of an ethical life, whether through religious observance or secular action. Our histories are profoundly shaped by the Holocaust and other confrontations with antisemitism over many centuries, just as we are touched by the State of Israel and the debates about its actions.
              </li>
              <li className='ethics-item'>
                We view all anti-racist struggles as interconnected. The many antisemitic acts and rising wave of exclusionary ethno-nationalism in recent years is a painful reminder that racisms of all forms continue to flourish around the world, including in Scotland and throughout the United Kingdom.
              </li>
              <li className='ethics-item'>
                We stress the importance of strongly defending academic freedom. This entails respecting a diversity of Jewish voices as well as the views of Palestinian, Arab and Muslim staff and students. As members of a people that has experienced discrimination over many centuries, we oppose interventions on campuses that level spurious charges of antisemitism from organizations claiming to represent a singular “Jewish community.”
              </li>
            </ul>
          </div>
          <div className='column'>
            <ul className='guidance-list'>
              <li className='ethics-item'>
                We support scholarship and exchange that engage in critical discussion of Palestine and the State of Israel. As Jewish university staff, we believe that universities and colleges should be centres of learning about the complex histories of Jewish and Palestinian national movements, cultures, and diasporas.
              </li>
              <li className='ethics-item'>
                We recognize non-violent forms of political protest as legitimate. This includes Boycott, Divestment and Sanctions (BDS) movements targeting institutions, companies or other entities which sustain violations of human rights. While not everyone may necessarily endorse the BDS movement or all its components, we oppose equating it with antisemitism.
              </li>
              <li className='ethics-item'>
                We promote effective approaches to addressing antisemitism and thus are opposed to institutional adoption of the controversial International Holocaust Remembrance Alliance (IHRA) working definition of antisemitism. As Judaism and Jewish culture have long been practiced by a global, multi-ethnic, and diverse group of peoples, contentious and inappropriately political definitions that equate Judaism and Jewishness with loyalty to the State of Israel - and the IHRA definition in particular - erase generations of debate within Jewish communities and Jewish scholarship. Adopting a flawed framework to confront antisemitism undermines our roles as researchers and educators and is antithetical to the broader pursuit of justice and tolerance at the core of the mission statements of our universities and colleges.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
