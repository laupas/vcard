interface Config {
    firstName: string;
    lastName: string;
    address: string;
    zipCode: string;
    location: string;
    phone: string;
    mail: string;

    companyAddress: string;
    companyZipCode: string;
    companyLocation: string;
    companyPhone: string;
    companyMail: string;
    companyName: string;
    jobName: string;
}

let config : Config = {
    firstName: "Pascal",
    lastName: "Lauener",

    address: "Flossenmatt 7c",
    zipCode: "6045",
    location: "Meggen",
    phone: "+41 79 386 86 86",
    mail: "pascal@lauener.biz",

    companyAddress: "General-Guisan-Strasse 8",
    companyZipCode: "6300",
    companyLocation: "Zug",
    companyPhone: "+41 79 386 86 86",
    companyMail: "pascal.lauener@callista.ch",
    companyName: "Callista",
    jobName: "Director Software Engineering"
}

export default config