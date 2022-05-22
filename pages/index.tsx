import Layout from "components/Layout";
import config from "components/config";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import * as IconlyPack from "react-iconly";
import { useRouter } from "next/router";
import { Grid } from "@nextui-org/react";

function HomePage() {
  const router = useRouter();
  const showPrivate = router.query["showPrivate"] == "true";
  const showBusiness = router.query["showBusiness"] == "true";
  const navigate = () =>
    router.push(
      `./api/card?${new Date().getTime()}&showPrivate=${showPrivate}&showBusiness=${showBusiness}`
    );

  const privatePart = (
    <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
      <Button id="HomeTitle" icon={<IconlyPack.Home />} auto ghost>
        Private Address
      </Button>
      <Grid.Container gap={1}>
        <Grid xs={2}>
          <IconlyPack.Location />
        </Grid>
        <Grid id="PrivateAddress">
          {config.address}
          <br></br>
          {config.zipCode} {config.location}
          <br></br>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={1}>
        <Grid xs={2}>
          <IconlyPack.Message />
        </Grid>
        <Grid id="PrivateContact">
          {config.phone}
          <br></br>
          {config.mail}
          <br></br>
        </Grid>
      </Grid.Container>
    </Card>
  );

  const businessPart = (
    <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
      <Button id="CompanyTitle" icon={<IconlyPack.Work />} auto ghost>
        Business Address
      </Button>
      <Grid.Container gap={1}>
        <Grid xs={2}>
          <IconlyPack.Location />
        </Grid>
        <Grid id="CompanyAddress">
          {config.companyAddress}
          <br></br>
          {config.companyZipCode} {config.companyLocation}
          <br></br>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={1}>
        <Grid xs={2}>
          <IconlyPack.Message />
        </Grid>
        <Grid id="CompanyContact">
          {config.companyPhone}
          <br></br>
          {config.companyMail}
          <br></br>
        </Grid>
      </Grid.Container>
    </Card>
  );

  return (
    <Layout>
      <Card
        id="headerCard"
        bordered
        shadow={true}
        hoverable
        css={{ mw: "400px" }}
      >
        <Avatar id="Avatar" zoomed src="./picture.jpeg" css={{ size: "$20" }} />
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <Button
          id="SaveContact"
          onClick={navigate}
          icon={<IconlyPack.AddUser />}
          auto
        >
          save me as contact
        </Button>
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <h1 id="name">
          {config.firstName} {config.lastName}
        </h1>
        <h3 id="title">Director Software Development</h3>
      </Card>
      {showBusiness ? businessPart : null}
      {showPrivate ? privatePart : null}
    </Layout>
  );
}

export default HomePage;
