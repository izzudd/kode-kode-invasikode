import express from "express";

function main(){
  const app = express();
  const port = 8080;

  // endpoint sederhana untuk menampilkan teks
  app.get("/", (req, res) => res.send("Express + Typescript + NodeJS = 😍"));

  // mulai server express
  app.listen(port, () => {
    console.log(`[server] server dimulai di http://localhost:${port} ⚡`);
  });
}

main();
