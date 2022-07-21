const express = require("express");
const cors = require("cors");
const session = require("express-session");

const argon2 = require("argon2");

const app = express();

const port = 5000;
const db = 3306;

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(
  session({
    name: "followz",
    secret: "laclesecretedelamortquitue",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

// eslint-disable-next-line
app.get("/me", async (req, res) => {
  const user = await prisma.User;

  if (!user) {
    return res.sendStatus(401);
  }

  res.send(user);
});

app.get("/users", async (req, res) => {
  res.send(
    await prisma.User.findMany({
      select: { id: true, nickname: true, createdAt: true },
    })
  );
});

app.post("/users", async (req, res) => {
  const user = await prisma.User.findUnique({
    where: { nickname: req.body.nickname },
  });

  if (!user) {
    res.send(
      await prisma.User.create({
        data: { ...req.body, password: await argon2.hash(req.body.password) },
      })
    );
  } else {
    res.sendStatus(401);
  }
});

// eslint-disable-next-line
app.post("/login", async (req, res) => {
  const user = await prisma.User.findUnique({
    where: { nickname: req.body.nickname },
  });

  if (!user) {
    return res.sendStatus(401);
  }

  if (await argon2.verify(user.password, req.body.password)) {
    delete user.password;
    return res.send(user);
  }

  res.sendStatus(401);
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`🖖 Server is listening on port ${port} 🖖`);
  // eslint-disable-next-line
  console.log(`🖖 Database is connected on port ${db} 🖖`);
});
