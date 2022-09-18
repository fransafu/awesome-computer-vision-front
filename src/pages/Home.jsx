import { Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => (
  <>
    <Row justify="center">
      <Col span={20}>
        <Typography>
          <Title>Home</Title>
          <Paragraph>
            Awesome Computer vision es un proyecto que recolecta contenido relacionado a visión por
            computadora con el objetivo de facilitar las conexiones entre los proyectos ya
            propuestas y los que vendrán
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  </>
);

export default Home;
