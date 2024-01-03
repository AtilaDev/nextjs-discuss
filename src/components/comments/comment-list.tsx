import {
  fetchCommentsPostById,
  // type CommentWithAuthor,
} from '@/db/queries/comments';
import CommentShow from '@/components/comments/comment-show';

interface CommentListProps {
  postId: string;
  // fetchData: () => Promise<CommentWithAuthor[]>;
}

export default async function CommentList({ postId }: CommentListProps) {
  // const comments = await fetchData();
  const comments = await fetchCommentsPostById(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        postId={postId}
        // comments={comments}
      />
    );
  });

  return (
    <div className='space-y-3'>
      <h1 className='text-lg font-bold'>All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
