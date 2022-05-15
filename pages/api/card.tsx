import VCard from 'vcard-creator'
import type { NextApiRequest, NextApiResponse } from 'next'


export default (req: NextApiRequest, res: NextApiResponse) => {
 //   res.status(200).json({ name: 'John Doe' })
//  }
  
// function Card() {
 
  const myVCard = new VCard()

  // Some variables
  const lastname = 'Lauener'
  const firstname = 'Pascal'
  const additional = ''
  const prefix = ''
  const suffix = ''
  
  myVCard
    // Add personal data
    .addName(lastname, firstname, additional, prefix, suffix)
    // Add work data
    .addCompany('Callista')
    .addJobtitle('Director Software Development')
    .addEmail('pascal.lauener@callista.ch')
    .addPhoneNumber("+41 79 386 86 86", 'WORK')
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