// components/organisms/Header/index.tsx
//import { Logo } from '../../components/atoms/Logo';
import { Navigation } from '../../../components/molecules/Navigation';


export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* <Logo /> */}
        <Navigation />
      </div>
    </header>
  );
};



