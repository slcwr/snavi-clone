'use client';
import { usePathname } from 'next/navigation';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import styles from './Breadcrumbs.module.scss'

export const BreadcrumbsComponent = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((path) => path);

  //パスに対応する表示名のマッピング
  const pathNameMap: { [key: string]: string } = {
    cart: 'カート',
    products: '製品・キーワード検索',
    generateproducts: '型番選択設定',
    admin: '製品管理',
    csvupload: 'CSVアップロード',
  };
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <div className={styles.breadcrumb__container}>
      <Link underline="hover" color="inherit" href="/">
      製品情報・見積り
      </Link>
      </div>
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const isLast = index === paths.length - 1;
        const displayName = pathNameMap[path] || path;

        return isLast ? (
          <Typography key={href} color="text.primary">
            {displayName}
          </Typography>
        ) : (
          <Link key={href} underline="hover" color="inherit" href={href}>
            {displayName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};


