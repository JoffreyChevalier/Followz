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
  const { user } = req.session;

  if (!user) {
    return res.sendStatus(401);
  }

  res.send(user);
});

// eslint-disable-next-line
app.post("/login", async (req, res) => {
  try {
    const user = await prisma.User.findUnique({
      where: { nickname: req.body.nickname },
    });

    if (!user) {
      return res.sendStatus(401);
    }

    if (await argon2.verify(user.password, req.body.password)) {
      delete user.password;
      req.session.user = user;
      return res.send(user);
    }

    res.sendStatus(401);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.delete("/logout", async (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("Unable to log out");
      } else {
        res.send("Logout successful");
      }
    });
  }
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

app.get("/applications", async (req, res) => {
  res.send(
    await prisma.Applications.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        jobTitle: true,
        company: true,
        url: true,
        status: true,
        archived: true,
        author: true,
      },
    })
  );
});

app.get("/applications/:authorId", async (req, res) => {
  const { authorId } = req.params;

  res.send(
    await prisma.Applications.findMany({
      where: { authorId: Number(authorId) },
      select: {
        id: true,
        createdAt: false,
        updatedAt: false,
        jobTitle: true,
        company: true,
        url: true,
        status: true,
        archived: true,
        author: false,
        techno: true,
      },
    })
  );
});

app.post("/applications/:authorId", async (req, res) => {
  const { authorId } = req.params;

  res.send(
    await prisma.Applications.create({
      data: {
        ...req.body,
        authorId: Number(authorId),
      },
    })
  );
});

// eslint-disable-next-line
app.put("/applications/:authorId", async (req, res) => {
  const application = await prisma.Applications.findUnique({
    where: { id: Number(req.body.id) },
  });

  if (!application) {
    return res.sendStatus(404);
  }

  const updatedApplication = {
    ...application,
    ...req.body,
  };

  updatedApplication.archived = Boolean(updatedApplication.archived);
  delete application.id;

  res.send(
    await prisma.Applications.update({
      where: { id: updatedApplication.id },
      data: updatedApplication,
    })
  );
});

app.delete(`/applications/:authorId`, async (req, res) => {
  const { id } = req.body;
  res.send(
    await prisma.Applications.delete({
      where: {
        id: Number(id),
      },
    })
  );
});

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`🖖 Server is listening on port ${port} 🖖`);
  // eslint-disable-next-line
  console.log(`🖖 Database is connected on port ${db} 🖖`);
});
