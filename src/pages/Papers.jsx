import { Col, Row, Typography } from 'antd';

import './Dataset.scss';

import Table from '../components/Table';

const { Title, Paragraph } = Typography;

const Papers = () => {
  // TODO: static dataSource
  const dataSource = [
    {
      key: '1',
      name: 'OmniVL:One Foundation Model for Image-Language and Video-Language Tasks',
      abstract:
        'This paper presents OmniVL, a new foundation model to support both image-language and video-language tasks using one universal architecture. It adopts a unified transformer-based visual encoder for both image and video inputs, and thus can perform joint image-language and video-language pretraining. We demonstrate, for the first time, such a paradigm benefits both image and video tasks, as opposed to the conventional one-directional transfer (e.g., use image-language to help video-language). To this end, we propose a decoupled joint pretraining of image-language and video-language to effectively decompose the vision-language modeling into spatial and temporal dimensions and obtain performance boost on both image and video tasks. Moreover, we introduce a novel unified vision-language contrastive (UniVLC) loss to leverage image-text, video-text, image-label (e.g., image classification), video-label (e.g., video action recognition) data together, so that both supervised and noisily supervised pretraining data are utilized as much as possible. Without incurring extra task-specific adaptors, OmniVL can simultaneously support visual only tasks (e.g., image classification, video action recognition), cross-modal alignment tasks (e.g., image/video-text retrieval), and multi-modal understanding and generation tasks (e.g., image/video question answering, captioning). We evaluate OmniVL on a wide range of downstream tasks and achieve state-of-the-art or competitive results with similar model size and data scale.',
      authors: 'Junke Wang, Dongdong Chen, Zuxuan Wu, Chong Luo, Luowei Zhou, Yucheng Zhao, Yujia Xie, Ce Liu, Yu-Gang Jiang, Lu Yuan',
      publicationDate: '15 Sep 2022',
      link: 'https://arxiv.org/abs/2209.07526'
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Abstract',
      dataIndex: 'abstract',
      key: 'abstract'
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors'
    },
    {
      title: 'Publication Date',
      dataIndex: 'publicationDate',
      key: 'publicationDate'
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link'
    }
  ];

  return (
    <>
      <Row justify="center">
        <Col span={20}>
          <Typography>
            <Title>Papers</Title>
            <Paragraph>
              Lista de publicaciones relacionadas con visión por computadora
            </Paragraph>
          </Typography>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={20}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </>
  );
};

export default Papers;
