import VCard from 'vcard-creator'
import type { NextApiRequest, NextApiResponse } from 'next'
import config from 'components/config';

export default (req: NextApiRequest, res: NextApiResponse) => {
 
  const myVCard = new VCard()
  var fileName = new Date().getTime();
  myVCard
    // Add personal data
    .addName(config.firstName, config.lastName, "", "", "")
    .addPhotoURL("https://media-exp1.licdn.com/dms/image/C4E03AQE8WYAr7wCsCg/profile-displayphoto-shrink_800_800/0/1651918608978?e=1658361600&v=beta&t=BjVxxLTz5u8Y_-79OAnPSFVR6h9835l_gZlxWOKcZ1o")
    // Add work data
    .addCompany(config.companyName)
    .addJobtitle(config.jobName)
    .addEmail(config.mail)
    .addPhoneNumber(config.phone, 'WORK')
//    .addAddress(null, null, 'street', 'worktown', null, 'workpostcode', 'Belgium')
      .addURL(fileName);
//    .addURL('http://www.callista.ch');
  
    res.setHeader('Content-Type', 'text/vcard; name="{fileName}.vcf"');
    res.setHeader('Content-Disposition', 'inline; filename="{fileName}.vcf"');
    res.send(myVCard.toString());
}
