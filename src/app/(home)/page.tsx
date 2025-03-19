

// *** Server/Backend ***

import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";


export default async function Home() {

  void trpc.categories.getMany.prefetch();

  return (
    
    <HydrateClient>
      <Suspense fallback={ <p>Loading...</p> }>     
        <ErrorBoundary fallback={ <p>Error...</p> }>
          <PageClient />
        </ErrorBoundary> 
      </Suspense>
    </HydrateClient>
  )
}

// *** Client/Frontend ***

// "use client";

// import { trpc } from "@/trpc/client";


// export default function Home() {

//   const { data } = trpc.hello.useQuery({ text: "World!!!"})

//   return (
    
//     <div>
//       Client Componant says: { data?.greeting }
//     </div>
//   )
// }
