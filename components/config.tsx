interface Config {
    firstName: string;
    lastName: string;
    address: string;
    zipCode: number;
    location: string;
    phone: string;
    mail: string;
    companyName: string;
    jobName: string;

}

let config : Config = {
    firstName: "Pascal",
    lastName: "Lauener",
    address: "Flossenmatt 7c",
    zipCode: 6045,
    location: "Meggen",
    phone: "+41 79 386 86 86",
    mail: "pascal.lauener@callista.ch",
    companyName: "Callista",
    jobName: "Director Software Engineering"
}

export default config