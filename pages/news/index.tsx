import Head from 'next/head';
import { GetStaticProps } from 'next';
import {
  Box,
  Link as ExternalLink,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import Layout from '../../components/Layout';
import { getAllPosts } from '../../utils/contentfulPages';
import BlogRoll from '../../components/BlogRoll';
import { PostInterface } from '../../types';

interface Props {
  posts: [PostInterface];
}

export default function Play({ posts }: Props) {
  return (
    <Layout>
      <Head>
        <title>WIHA News</title>
      </Head>
      <Flex direction="column" align="center" bg="blackAlpha.200" py="2rem">
        <Heading as="h1" size="lg" textAlign="center" my={2}>
          News
        </Heading>
        <Text fontSize="lg" my="1rem" w={[350, 550, 700, 800]} px="1rem">
          Official announcments from WIHA can be found here. For more frequent
          communications about hockey in Wellington,&nbsp;
          <ExternalLink
            isExternal
            title="WIHA facebook page"
            href="https://www.facebook.com/wellingtonicehockeyassociation/"
          >
            check the WIHA facebook page
          </ExternalLink>
          &nbsp;or the&nbsp;
          <ExternalLink
            isExternal
            title="Wellington ice hockey community facebook page"
            href="https://www.facebook.com/groups/wellyicehockey"
          >
            Wellington ice hockey commmunity facebook page
          </ExternalLink>
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Box mb="2rem" px="1.5rem" w={[350, 550, 700, 800]}>
          <BlogRoll posts={posts} />
        </Box>
      </Flex>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getAllPosts();
  const posts = blogPosts.map((post) => post.fields);

  return {
    props: {
      posts,
    },
  };
};
