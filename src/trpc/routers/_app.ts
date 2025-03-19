// import { z } from 'zod';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { createTRPCRouter } from '../init';

// import { auth } from '@clerk/nextjs/server';
// import { TRPCError } from '@trpc/server';


export const appRouter = createTRPCRouter({


categories: categoriesRouter,


  // hello: protectedProcedure
  //   .input(
  //     z.object({
  //       text: z.string(),
  //     }),
  //   )
  //   .query((opts) => {

  //     console.log({ dbUser: opts.ctx.user });

  //     throw new TRPCError({ code: "BAD_REQUEST"});

  //     const { userId } = await auth();

  //     console.log('Hello World', { userId });

  //     return {

  //       greeting: `hello ${opts.input.text}`,
  //     };
  //   }),
});

// export type definition of API
export type AppRouter = typeof appRouter;