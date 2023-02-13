const app = Vue.createApp({});


const Pages = {
    template: `
    <h1>Page {{$route.params.id}}</h1>
    `,
};

const routes = [{ path: "/pages/:id", component: Pages }];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
  })

app.use(router);


app.mount("#app");
