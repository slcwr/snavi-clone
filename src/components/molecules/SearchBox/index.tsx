// components/molecules/SearchBox/index.tsx
import { Input } from '../../../components/atoms/Input';
import Button  from '../../../components/atoms/Button';

export const SearchBox = () => {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="製品名やキーワードを入力"
        className="flex-1"
      />
      <Button>検索</Button>
    </div>
  );
};