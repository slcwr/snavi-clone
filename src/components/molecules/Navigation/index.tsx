// components/molecules/Navigation/index.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  subItems?: {
    id: string;
    label: string;
    href: string;
  }[];
}

const navigationItems: NavigationItem[] = [
  {
    id: 'products',
    label: '製品から探す',
    href: '/products',
    subItems: [
      { id: 'servers', label: 'サーバ', href: '/products/servers' },
      { id: 'storage', label: 'ストレージ', href: '/products/storage' },
      { id: 'network', label: 'ネットワーク', href: '/products/network' }
    ]
  },
  {
    id: 'os',
    label: 'OSから探す',
    href: '/os',
    subItems: [
      { id: 'windows', label: 'Windows', href: '/os/windows' },
      { id: 'linux', label: 'Linux', href: '/os/linux' }
    ]
  },
  {
    id: 'support',
    label: 'サポート・ダウンロード',
    href: '/support'
  }
];

export const Navigation: React.FC = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="relative">
      <ul className="flex space-x-6">
        {navigationItems.map((item) => (
          <li
            key={item.id}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={`
                px-3 py-2 text-gray-700 hover:text-blue-600
                ${router.pathname.startsWith(item.href) ? 'text-blue-600' : ''}
              `}
            >
              {item.label}
              {item.subItems && (
                <span className="ml-1">▼</span>
              )}
            </Link>

            {/* ドロップダウンメニュー */}
            {item.subItems && activeMenu === item.id && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <ul className="py-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        className={`
                          block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                          ${router.pathname === subItem.href ? 'bg-gray-50' : ''}
                        `}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* モバイルメニューボタン */}
      <button
        className="lg:hidden p-2"
        onClick={() => setActiveMenu(activeMenu ? null : 'mobile')}
      >
        <span className="sr-only">メニュー</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* モバイルメニュー */}
      {activeMenu === 'mobile' && (
        <div className="lg:hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <ul className="py-2">
            {navigationItems.map((item) => (
              <React.Fragment key={item.id}>
                <li>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                </li>
                {item.subItems?.map((subItem) => (
                  <li key={subItem.id}>
                    <Link
                      href={subItem.href}
                      className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};


export default Navigation;