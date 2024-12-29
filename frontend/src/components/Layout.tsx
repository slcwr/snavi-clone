import { ReactNode } from 'react';
type LayoutProps = {
    children: ReactNode;
  };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="header">{/* ヘッダーコンテンツ */}</header>
      <div className="container">
        <aside className="main">{/* サイドバーコンテンツ */}</aside>
        <main className="main">{children}</main>
      </div>
      <footer className="header">{/* ヘッダーコンテンツ */}</footer>
    </div>
  );
}
