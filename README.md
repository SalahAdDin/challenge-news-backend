# Backend

A template to deploy [JSON Server](https://github.com/typicode/json-server) to [Vercel](https://vercel.com), allow you to run fake REST API online!

Demo from this repository:

1. https://json-server-in.vercel.app
2. https://json-server-in.vercel.app/api/posts

![Powered by Vercel](https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg)

## How to use

1. Update or use the default [`db.json`](./db.json) in the repository.
2. Sign Up or login into [Vercel](https://vercel.com).
3. From the Vercel dashboard, click "**+ New Project**" then "**Import**" your repository.
4. In the "**Configure Project**" screen, leave everything default and click "**Deploy**".
5. Wait until deployment is done, and your own JSON server is ready to serve!

## Default `db.json`

```json
{
  "news": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "categories": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
```

## Reference

1. https://github.com/typicode/json-server
2. https://vercel.com
3. https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel
4. https://github.com/kitloong/json-server-vercel