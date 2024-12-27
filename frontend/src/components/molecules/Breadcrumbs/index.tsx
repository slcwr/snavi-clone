'use client';
import { usePathname } from 'next/navigation';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export const BreadcrumbsComponent = () => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((path) => path);

  //パスに対応する表示名のマッピング
  const pathNameMap: { [key: string]: string } = {
    cart: 'カート',
    products: '商品一覧',
    generateproducts: '型番選択',
  };
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        ホーム
      </Link>
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


