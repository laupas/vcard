
import Layout from 'components/Layout';
import config from 'components/config';
import { Button } from '@nextui-org/react';
import { Card } from '@nextui-org/react';
import { Link } from '@nextui-org/react';
import { Image } from '@nextui-org/react';


function HomePage() {
  return (

<Layout>
<Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
      <Image
        showSkeleton
        width={320}
        height={180}  
        src="https://media-exp1.licdn.com/dms/image/C4E03AQE8WYAr7wCsCg/profile-displayphoto-shrink_800_800/0/1651918608978?e=1658361600&v=beta&t=BjVxxLTz5u8Y_-79OAnPSFVR6h9835l_gZlxWOKcZ1o"
        alt="Default Image"
        objectFit="cover"
      />
      </Card>
      <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
        <h1>{config.firstName} {config.lastName}</h1>
        <p>Director Software Development</p>
      </Card>
      <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
      <p>{config.address}</p>
        <p>{config.zipCode} {config.location}</p>
        <p>{config.phone}</p>
        <p>{config.mail}</p>
      </Card>
      <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
        <Link href='./api/card'>save me as contact</Link>
      </Card>
    </Layout>
  );
}

export default HomePage;
