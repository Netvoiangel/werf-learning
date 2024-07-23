const server = Bun.serve({
    fetch(req) {
      return new Response("Bun!");
    },
  });

  console.log('Server start at 3000');