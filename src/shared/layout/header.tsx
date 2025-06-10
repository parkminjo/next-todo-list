import Link from 'next/link';
import { PATH } from '@/shared/constants/path';

const Header = () => {
  return (
    <header className='px-4 py-2'>
      <Link href={PATH.HOME} className='font-semibold'>
        DODO
      </Link>
    </header>
  );
};

export default Header;
