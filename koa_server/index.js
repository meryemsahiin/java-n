const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    if (ctx.path === '/') {
      ctx.status = 200;
      ctx.body = '<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2>';
    } else {
      await next();
    }
  });

app.use(async (ctx, next) => {
    if (ctx.path === '/about') {
      ctx.status = 200;
      ctx.body = '<h2>ABOUT SAYFASINA HOŞGELDİNİZ</h2>';
    } else {
      await next();
    }
  });

app.use(async (ctx, next) => {
    if (ctx.path === '/contact') {
      ctx.status = 200;
      ctx.body = '<h2>CONTACT SAYFASINA HOŞGELDİNİZ</h2>';
    } else {
      await next();
    }
  });

app.use(async (ctx, next) => {
    await next();
    if (ctx.status === 404) {
      ctx.status = 404;
      ctx.body = '<h2>404 Not Found</h2>';
    }
  });


const port = 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });