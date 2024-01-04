'use client';

import { Input } from '@nextui-org/react';
import { SearchIcon } from '@/components/common/search-icon';
import { useSearchParams } from 'next/navigation';
import * as actions from '@/actions';

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input
        name='term'
        defaultValue={searchParams.get('term') || ''}
        className='w-72'
        placeholder='Search...'
        startContent={<SearchIcon />}
      />
    </form>
  );
}
