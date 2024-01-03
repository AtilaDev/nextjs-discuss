import { cache } from 'react';
import { db } from '@/db';
import type { Comment } from '@prisma/client';

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export const fetchCommentsPostById = cache(
  (postId: string): Promise<CommentWithAuthor[]> => {
    console.log('Making a query!');

    return db.comment.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });
  }
);
