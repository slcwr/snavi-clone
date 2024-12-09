import { Products } from '../../atoms/Link/Products'

export const SearchTypeList = () => (

    <div className="search-type-list">
      <div className="search-type-item">
        <Products/>
        <span>・・・製品名の一部や固文字から検索</span><br/>
        <a href="#">カテゴリから探す</a>
        <span>・・・各カテゴリに属する製品を検索</span><br/>
        <a href="#">型番一括検索</a>
        <span>・・・複数型番から価格や保守料等を一括検索</span><br/>
      </div>
      {/* 他の検索オプション */}
    </div> 
  );