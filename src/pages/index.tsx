import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="flex">
          <Card value={0} />
          <Card value={1} />
          <Card value={2} />
          <Card value={3} />
          <Card value={4} />
        </div>
        <div className="flex">
          <Card value={5} />
          <Card value={6} />
          <Card value={7} />
          <Card value={8} />
          <Card value={9} />
        </div>
      </main>
    </>
  );
};

export default Home;

interface CardProps {
  value: number;
}
function Card({ value }: CardProps) {
  return (
    <div className="flex h-64 w-48 flex-col justify-between rounded-md border border-black bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500">
      <TopCornerValues value={value} />
      <div className="flex justify-center text-8xl">{value}</div>
      <BottomCornerValues value={value} />
    </div>
  );
}

function TopCornerValues({ value }: CardProps) {
  return (
    <span className="flex justify-between">
      <span className="from-orange-slate-400 relative h-12 w-12  rounded-br-[64px] rounded-tl border-r border-b  border-black bg-gradient-to-br from-slate-100 to-slate-400">
        <span className="absolute left-2 text-3xl">{value}</span>
      </span>
      <span className="relative h-12 w-12 rounded-bl-[64px]  rounded-tr border-l border-b border-black bg-gradient-to-bl from-slate-100 to-slate-400">
        <span className="absolute right-2 text-3xl">{value}</span>
      </span>
    </span>
  );
}

function BottomCornerValues({ value }: CardProps) {
  return (
    <span className="flex justify-between">
      <span className="relative h-12 w-12 rounded-tr-[64px]  rounded-bl border-r border-t border-black bg-gradient-to-tr from-slate-100 to-slate-400">
        <span className="absolute bottom-1 left-2 text-3xl">{value}</span>
      </span>
      <span className="relative h-12 w-12 rounded-tl-[64px]  rounded-br border-l border-t border-black bg-gradient-to-tl from-slate-100 to-slate-400">
        <span className="absolute right-2 bottom-1 text-3xl">{value}</span>
      </span>
    </span>
  );
}

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
