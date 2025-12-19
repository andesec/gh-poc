/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-10 px-8 py-24 text-center sm:px-16">
        <img
          className="h-12 w-auto dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
        />
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-black dark:text-zinc-50">
          Static export ready for GitHub Pages
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          This project uses a static export to publish the site. Assets are served from the repository base path so the page works
          when hosted under <code>/gh-poc</code> on GitHub Pages.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img
            className="h-10 w-auto dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={80}
            height={20}
          />
          <img
            className="h-10 w-auto"
            src="/next.svg"
            alt="Next.js badge"
            width={100}
            height={20}
          />
        </div>
      </main>
    </div>
  );
}
