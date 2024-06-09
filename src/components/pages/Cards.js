import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>WELCOME</h1>
      <h2>to the Scottish Universities Jewish Staff Network</h2>
      <p>
        This network brings together Jewish staff and researchers in HEI across Scotland who share core commitments to justice and equality.
      </p>
      <div>
        <ul className='home-list'>
          <li className='home-item'>Seeks to nurture thoughtful approaches to addressing antisemitism and interconnected anti-racist struggles, while fostering intercommunal solidarity.</li>
          <li className='home-item'>Recognizes that antisemitism needs to be addressed as a form of discrimination alongside other forms of discrimination including anti-Palestinian racism and Islamophobia, and tackled with socially and historically informed approaches.</li>
          <li className='home-item'>Agrees with scholars, Rabbis, Holocaust survivors, leading universities, Jewish organisations, human rights and legal experts, the lead author of the “IHRA definition” himself, that the IHRA definition should not be adopted by institutions, is counter-productive, discriminates against many including Jews, and/or has led to a range of deeply concerning negative impacts.</li>
        </ul>
      </div>
      <p>
        Grieving with all those impacted by the horrific violence in Israel/Palestine, the JSN is alarmed by the conflation of Jews and Judaism with radical ultra-Zionism in order to justify extreme state violence, killing, dehumanisation and racism against Palestinians. It is also alarmed by the unprecedented repression against those who stand in solidarity with Palestinians. Challenging unfounded and politically weaponised allegations of antisemitism, and opposing any manifestation of actual antisemitism, the JSN seeks to encourage joint political reflection and action against any form of racism and related atrocities and crimes.
      </p>
    </div>
  );
}

export default Cards;
