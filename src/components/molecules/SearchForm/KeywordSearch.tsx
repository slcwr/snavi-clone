import { SearchInput } from '../../atoms/SearchInput/SearchInput'; 
import { SearchButton } from '../../atoms/SearchButton/SearchButton';

export const KeywordSearch = () => (
    <div className="keyword-search">
      <div className="search-row">
        <label>型番</label>
        <SearchInput placeholder="" />
        <label>キーワード</label>
        <SearchInput placeholder="空白区切りで複数のキーワードが指定可能です。" />
        <SearchButton />
      </div>
    </div>
  );
