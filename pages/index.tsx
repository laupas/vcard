
import Layout from 'components/Layout';
import config from 'components/config';
import { Button } from '@nextui-org/react';
import { Card } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { User } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';



function HomePage() {
  return (

<Layout>
  <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
    <Avatar
      zoomed
      src="https://media-exp1.licdn.com/dms/image/C4E03AQE8WYAr7wCsCg/profile-displayphoto-shrink_800_800/0/1651918608978?e=1658361600&v=beta&t=BjVxxLTz5u8Y_-79OAnPSFVR6h9835l_gZlxWOKcZ1o"
      css={{ size: "$40" }}
    />
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <h1>{config.firstName} {config.lastName}</h1>
        <h3>Director Software Development</h3>
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <h3>Private Address</h3>
        {config.address}<br></br>
        {config.zipCode} {config.location}<br></br>
        {config.phone}<br></br>
        {config.mail}<br></br>
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <h3>Business Address</h3>
        {config.address}<br></br>
        {config.zipCode} {config.location}<br></br>
        {config.phone}<br></br>
        {config.mail}<br></br>
      </Card>
      <Card bordered shadow={true} hoverable css={{ mw: "400px" }}>
        <Link href='./api/card?{new Date().getTime()}'>save me as contact</Link>
      </Card>
    </Layout>
  );
}

export default HomePage;
