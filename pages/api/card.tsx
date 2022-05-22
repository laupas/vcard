import VCard from "vcard-creator";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "components/config";
import fs from "fs";
import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const showPrivate = req.query["showPrivate"] == "true";
  const showBusiness = req.query["showBusiness"] == "true";

  const dir = path.resolve("./public");
  const image = fs.readFileSync(dir + "/picture.jpeg", {
    encoding: "base64",
    flag: "r",
  });

  const myVCard = new VCard();
  const fileName = new Date().getTime();

  myVCard
    .addName(config.firstName, config.lastName, "", "", "")
    .addPhoto(image, "JPEG");

  if (showBusiness) {
    // Add work data
    myVCard
      .addCompany(config.companyName)
      .addJobtitle(config.jobName)
      .addEmail(config.companyMail, "WORK")
      .addPhoneNumber(config.companyPhone, "WORK")
      .addAddress(
        "Callista AG",
        "",
        config.companyAddress,
        config.companyLocation,
        "",
        config.companyZipCode,
        "",
        "WORK;POSTAL"
      )
      .addURL("http://www.callista.ch");
  }

  if (showPrivate) {
    // Add home data
    myVCard
      .addAddress(
        "Private",
        "",
        config.address,
        config.location,
        "",
        config.zipCode,
        "",
        "HOME;POSTAL"
      )
      .addEmail(config.mail, "HOME")
      .addPhoneNumber(config.phone, "HOME");
  }

  res.setHeader("Content-Type", `text/vcard; name="${fileName}.vcf"`);
  res.setHeader("Content-Disposition", `inline; filename="${fileName}.vcf"`);
  res.send(myVCard.toString());
};
