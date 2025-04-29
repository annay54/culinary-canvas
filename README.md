This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About CulinaryCanvas

CulinaryCanvas is a personal web development project designed to bring food enthusiasts together through the art of recipe sharing. It serves as a vibrant community where home cooks and kitchen experts can create, explore, and exchange culinary creations and experiences. Users can effortlessly browse and contribute recipes, inspiring one another with their passion for food.

The platform also offers strong search and discovery features, allowing users to find recipes tailored to different occasions, times of day, and themes. With advanced filtering and sorting options — such as selecting specific recipe tags — CulinaryCanvas makes it easy to uncover the perfect dish for any moment.

## Getting Started

First, clone this git repository and ensure the commit and files downloaded are up to date.

### Frontend

Install the frontend dependencies for this project, which are listed in the package.json file. Navigate to the project's root directory and then navigate to the "client" folder in your terminal. You should be able to see the package.json file. Run the npm command in your terminal:

```
npm install
```

Then, run the frontend:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the web application.

### Backend

Navigate to the project's root directory and then navigate to the "server" folder in your terminal and install the backend dependencies, similar to above:

```
npm install
```

To create and initialize the Postgres database and tables, run the sql script in the SQL Shell (psql):

```
\i 'path_to_sql_file/createDB.sql'
```

Then, run the backend:

```bash
npm run dev
```

## Additional Notes

This project is an ongoing project and it is created using HTML, CSS, Tailwind CSS, JavaScript, and Next.js as the React framework.

To view the wireframe and prototype for CulinaryCanvas, [`click here for the Figma link`](https://www.figma.com/files/team/1420921119875615270/project/282269506/Team-project?fuid=1111645432946840513).

To view the backlog of CulinaryCanvas, which consists of the task distribution and issues, [`click here for the GitHub Backlog link`](https://github.com/users/annay54/projects/1/views/1).
