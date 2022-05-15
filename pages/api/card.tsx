import VCard from 'vcard-creator'
import type { NextApiRequest, NextApiResponse } from 'next'


export default (req: NextApiRequest, res: NextApiResponse) => {
 //   res.status(200).json({ name: 'John Doe' })
//  }
  
// function Card() {
 
  const myVCard = new VCard()

  // Some variables
  const lastname = 'Desloovere'
  const firstname = 'Jeroen'
  const additional = ''
  const prefix = ''
  const suffix = ''
  
  myVCard
    // Add personal data
    .addName(lastname, firstname, additional, prefix, suffix)
    // Add work data
    .addCompany('Siesqo')
    .addJobtitle('Web Developer')
    .addRole('Data Protection Officer')
    .addEmail('info@jeroendesloovere.be')
    .addPhoneNumber(1234121212, 'PREF;WORK')
    .addPhoneNumber(123456789, 'WORK')
    .addAddress(null, null, 'street', 'worktown', null, 'workpostcode', 'Belgium')
    .addURL('http://www.jeroendesloovere.be');
  
    res.setHeader('Content-Type', 'text/vcard; name="enesser.vcf"');
    res.setHeader('Content-Disposition', 'inline; filename="enesser.vcf"');
//    res.send(myVCard);
    //send the response
    res.send(myVCard.toString());
    //res.status(200).json({ name: myVCard.toString() })
    
}

 //export default Card;