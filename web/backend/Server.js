const Express = require("express");
const App = Express();
const Port = process.env.myPort || 3010;

App.use(Express.json());

const Customers = { data: [] };

App.get("/", (req, res) => {
  res.send("Hello Express");
});

App.get("/api/customers", (req, res) => {
  res.send(Customers);
});

App.get("/api/customers/:id", (req, res) => {
  const customer = Customers.data.find((item) => item.id == req.params.id);
  if (customer) {
    res.send(customer);
  } else {
    res.send("Not Found ! ! !");
  }
});

App.post("/api/customers", (req, res) => {
  if (!req.body.name || req.body.name.length < 2)
    return res.send({
      Success: false,
      Message: "لطفا کادرهای مورد نظر را پر کنید",
    });

  const customer = {
    id: Customers.data.length + 1,
    name: req.body.name,
    password: req.body.password,
  };

  Customers.data.push(customer);
  res.send(customer);
});

App.listen(Port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("App Listen to port => " + Port);
  }
});
