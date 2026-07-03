function Home() {
  return (
    <main className="min-h-dvh bg-zinc-950 px-6 py-10 text-zinc-50">
      <section className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-6xl flex-col justify-center gap-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-emerald-300">
            MCP Server Maker
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Generate reviewed MCP servers from real repositories.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Import a repository, review proposed tools, block dangerous actions,
            validate the build, and export a clean TypeScript MCP server.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {["Authenticate", "Review risk", "Export server"].map((label) => (
            <div
              className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-5"
              key={label}
            >
              <h2 className="text-base font-semibold">{label}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Foundation module ready for the MCP Maker workflow.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
