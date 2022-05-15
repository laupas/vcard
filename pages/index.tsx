
import Layout from 'components/Layout';
import config from 'components/config';

function HomePage() {
  return (
    <Layout>
       <img src='https://media-exp1.licdn.com/dms/image/C4E03AQE8WYAr7wCsCg/profile-displayphoto-shrink_800_800/0/1651918608978?e=1658361600&v=beta&t=BjVxxLTz5u8Y_-79OAnPSFVR6h9835l_gZlxWOKcZ1o'></img>
        <h1>{config.firstName} {config.lastName}</h1>
        <hr></hr>
        <p>Director Software Development</p>
        <p>{config.address}</p>
        <p>{config.zipCode} {config.location}</p>
        <p>{config.phone}</p>
        <p>{config.mail}</p>
        <hr></hr>
        <a href='./api/card'>save me as contact</a>
        <hr></hr>
    </Layout>
  );
}

export default HomePage;
