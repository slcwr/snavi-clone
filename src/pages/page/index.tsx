// pages/index.tsx
import { HomeTemplate } from '../../components/templates/HomeTemplate';
import { GetStaticProps } from 'next';

export default function Home({ products }: any) {
  return <HomeTemplate products={products} />;
}

export const getStaticProps: GetStaticProps = async () => {
  // 製品データの取得
  return {
    props: {
      products: []
    }
  };
};