import { Col, Row, Typography } from 'antd';

import './Dataset.scss';

import Table from '../components/Table';

const { Title, Paragraph } = Typography;

const Dataset = () => {
  // TODO: static dataSource
  const dataSource = [
    {
      key: '1',
      name: 'PASCAL VOC 2009 dataset',
      description:
        'Classification/Detection Competitions, Segmentation Competition, Person Layout Taster Competition datasets',
      publicationDate: '2022-04-06',
      type: 'detection ',
      link: 'http://host.robots.ox.ac.uk/pascal/VOC/voc2009/index.html'
    },
    {
      key: '2',
      name: 'Caltech 101',
      description:
        "Pictures of objects belonging to 101 categories. About 40 to 800 images per category. Most categories have about 50 images. Collected in September 2003 by Fei-Fei Li, Marco Andreetto, and Marc'Aurelio Ranzato. The size of each image is roughly 300 x 200 pixels. We have carefully clicked outlines of each object in these pictures, these are included under the 'Annotations.tar'. There is also a MATLAB script to view the annotations, 'show_annotations.m'",
      publicationDate: '2022-04-06',
      type: 'detection ',
      link: 'https://data.caltech.edu/records/20086'
    }
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Publication Date',
      dataIndex: 'publicationDate',
      key: 'publicationDate'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link'
    }
  ];

  return (
    <>
      <Row justify='center'>
        <Col span={20}>
          <Typography>
            <Title>Dataset</Title>
            <Paragraph>
              Los conjuntos de datos a continuación representan aportes voluntarios para el
              desarrollo, investigación y prueba de algoritmos y/o modelos de visión por
              computadora.
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Row justify='center'>
        <Col span={20}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default Dataset;
