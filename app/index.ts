const server = Bun.serve({
    fetch(req) {
      return new Response("Bun!");
    },
  });
