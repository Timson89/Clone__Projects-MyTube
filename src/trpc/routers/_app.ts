import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../init';

// import { auth } from '@clerk/nextjs/server';
// import { TRPCError } from '@trpc/server';


export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      }
     ),
    ).query((opts) => {

      console.log({ dbUser: opts.ctx.user });

      // throw new TRPCError({ code: "BAD_REQUEST"});

      // const { userId } = await auth();

      // console.log('Hello World', { userId });

        return {

          greeting: `hello ${opts.input.text}`,
        };
      }
    ),
  }
);
// export type definition of API
export type AppRouter = typeof appRouter;