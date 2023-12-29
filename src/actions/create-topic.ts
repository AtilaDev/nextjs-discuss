'use server';

import { z } from 'zod';

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, { message: 'Only lowercase letters and hyphens allowed' }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };

  // TODO: revalidate homepage
}
