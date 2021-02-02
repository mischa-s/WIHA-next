import { Button, Heading, Flex, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import Post from '../components/Post';

interface BlogRollProps {
  posts: [
    {
      heroImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      title: string;
      description: string;
      publishDate: string;
      slug: string;
      body: Document;
    }
  ];
}

export default function BlogRoll({ posts }: BlogRollProps) {
  return (
    <Flex align="center" direction="column" mb="2rem">
      {posts &&
        posts.map((post) => {
          // console.log(heroImage);
          const { slug, title, description, publishDate } = post;
          return (
            <div key={slug}>
              <Heading as="h3" mt="2rem" mb="1rem" size="md">
                <Link href={`/news/${slug}`}>
                  <Text cursor="pointer">
                    {title} &bull; {format(parseISO(publishDate), 'dd.MM.yyyy')}
                  </Text>
                </Link>
              </Heading>
              <p>{description}</p>

              <Post post={post} />
              <Button mb={10} variant="link">
                <Link href={`/news/${slug}`}>Keep Reading →</Link>
              </Button>
            </div>
          );
        })}
    </Flex>
  );
}
