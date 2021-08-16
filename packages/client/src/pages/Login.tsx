import { Layout } from "../components/Layout";
import { useGetUserByIdQuery } from "../generated/graphql";

export const Login: FC = () => {
  const user = useGetUserByIdQuery({
    variables: { id: 1 },
  });

  return (
    <Layout>
      {() => (
        <div class="flex-1 flex flex-col justify-center items-center">
          <h1 class="text-6xl text-gray-600 font-bold">
            Gomoku
          </h1>

          <div style={{ height: 200 }} class="flex flex-col justify-center items-center">
            {user.data && (
              <>
                Hello, {user.data.user?.name ?? 'John Doe'}
              </>
            )}
          </div>

          <button class="text-xl py-2 px-4 rounded bg-gray-200">
            START
          </button>
        </div>
      )}
    </Layout>
  )
};
