
import Layout from 'components/Layout';
import config from 'components/config';
import { Button } from '@nextui-org/react';
import { Card } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { User } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import * as IconlyPack from 'react-iconly'
import { useRouter } from 'next/router';
import { Grid } from '@nextui-org/react';


function HomePage() {
  const router = useRouter();
  const navigate = () => router.push("./api/card?" + new Date().getTime());
  return (
    <Layout>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <Avatar
          zoomed
          src="./picture.jpeg"
          css={{ size: "$20" }}
        />
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <Button onClick={ navigate } icon={<IconlyPack.AddUser /> } auto>
          save me as contact
        </Button>
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <h1>{config.firstName} {config.lastName}</h1>
        <h3>Director Software Development</h3>
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <Button icon={<IconlyPack.Home /> } auto ghost>
          Private Address
        </Button>
        <Grid.Container gap={1}>
          <Grid xs={2}>
            <IconlyPack.Location />
          </Grid>
          <Grid>
            {config.address}<br></br>
            {config.zipCode} {config.location}<br></br>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={1}>
          <Grid xs={2}>
          <IconlyPack.Message />
          </Grid>
          <Grid>
           {config.phone}<br></br>
            {config.mail}<br></br>
          </Grid>
        </Grid.Container>
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
      <Button icon={<IconlyPack.Work /> } auto ghost>
          Business Address
        </Button>

        <Grid.Container gap={1}>
          <Grid xs={2}>
            <IconlyPack.Location />
          </Grid>
          <Grid>
            {config.companyAddress}<br></br>
            {config.companyZipCode} {config.companyLocation}<br></br>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={1}>
          <Grid xs={2}>
          <IconlyPack.Message />
          </Grid>
          <Grid>
            {config.companyPhone}<br></br>
            {config.companyMail}<br></br>
          </Grid>
        </Grid.Container>

      </Card>
    </Layout>
  );
}

export default HomePage;
