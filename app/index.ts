const server = Bun.serve({
    port: 3000,
    fetch(request) {
        console.log(request);
      return new Response("Welcome to Bun Motherfuckers!");
    },
  });
  
  console.log(`Listening on ${server.url}!!!`);