import { redirect } from 'next/navigation';
import PostList from '@/components/posts/post-list';
import { fetchPostBySearchTerm } from '@/db/queries/posts';

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect('/');
  }

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <PostList fetchData={() => fetchPostBySearchTerm(term)} />
    </div>
  );
}
