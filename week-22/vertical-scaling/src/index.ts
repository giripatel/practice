import cluster from 'cluster';
import os from 'os';
import express from "express"

const totalCPUs = os.cpus().length;

const port = 3000;

if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();

  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log(`Creating another fork`);

    cluster.fork();

  })
} else {
  const app = express();

  console.log(`worker ${process.pid} started`);

  app.get('/', (req: any, res: any) => {
    res.send("Hello World!");
  })

  app.get("/api/:n", (req, res) => {

    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 500000000) n = 500000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    res.send(`Final count is ${count} ${process.pid}`)
  })

  app.listen(3000, () => {
    console.log(`App is listening on port ${port}`);

  });
}
