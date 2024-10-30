// components/molecules/ProductCard/index.tsx
import { Text } from '../../../components/atoms/Text';
import { Button } from '../../../components/atoms/Button';

export const ProductCard = ({ product }: any) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <Text variant="h3" className="font-bold mb-2">
        {product.name}
      </Text>
      <Text className="mb-4">{product.description}</Text>
      <Button variant="outline" fullWidth>
        詳細を見る
      </Button>
    </div>
  );
};