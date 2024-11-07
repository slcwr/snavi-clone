// pages/index.tsx
import { HomeTemplate } from '../../components/templates/HomeTemplate';
const { Product } = require('../../db/entities/Product');

export default function Home() {
  return (
    <HomeTemplate />
  );
}