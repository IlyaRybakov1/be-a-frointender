const express = require("express");
   
const app = express();


let data = [
  { id: 10, firstName:"Marty", lastName: "McFly", group: 101, rate: 9.5 },
  { id: 11, firstName:"Squidward", lastName: "Tentakles", group: 102, rate: 6.1 },
  { id: 12, firstName:"Donald", lastName: "Duck", group: 102, rate: 7.2 },
  { id: 13, firstName:"Sarah", lastName: "Connor", group: 101, rate: 8.3 },
  { id: 14, firstName:"Yugin", lastName: "Krabbs", group: 102, rate: 6.8 },
 ];
 
//парсер для данных
const urlencodedParser = express.urlencoded({extended: false});


app.get("/students", function (req, res) {
  let json = { ...data };
    res.send(json);
});

app.get("/students/:id", function (req, res) {
  let sendData = "Cannot find student with id " + req.params.id;
    data.forEach((element) => {
      if (req.params.id == element.id) {
        sendData = element;
      }
    });
    res.send(sendData);
});

app.post("/students/:id", urlencodedParser, function (req, res) {
  if (req.body.firstName.length == 0 || req.body.lastName.length == 0) {
    res.sendStatus(400);
  } else {
    let isError = false;
    data.forEach((element) => {
      if (req.params.id == element.id) {
        res.sendStatus(400);
        res.send("Input data error!");
        isError = true;
      }
    });
    if (!isError) {
      let obj = {
        id: Number(req.params.id),
        firstName: req.body.firstName,
        lastName: req.body. lastName,
        group: Number(req.body.group),
        rate: Number(req.body.rate)
      }
      data.push(obj);
      console.log(data);
      res.send("Data added!");
    }
  }
});

//Студенту нельзя изменить id
app.put("/students/:id", urlencodedParser, function (req, res) {
  if ((req.body.firstName != undefined && req.body.firstName.length == 0) || (req.body.lastName != undefined && req.body.lastName.length == 0)) {
    res.sendStatus(400);
  } else {
    let isError = true;
    for (let i = 0 ; i < data.length; i++) {
      if (req.params.id == data[i].id) {
        isError = false;
        if (req.body.firstName != undefined) {
          data[i].firstName = req.body.firstName;
        }
        if (req.body.lastName != undefined) {
          data[i].lastName = req.body.lastName;
        }
        if (req.body.group != undefined) {
          data[i].group = Number(req.body.group);
        }
        if (req.body.rate != undefined) {
          data[i].rate = Number(req.body.rate);
        }
        res.send("Data changed!");
        break
      }
    }
    if (isError) {
      res.sendStatus(400);
    }
  }
});

app.delete("/students/:id", urlencodedParser, function (req, res) {
  let isError = true;
    for (let i = 0 ; i < data.length; i++) {
      if (req.params.id == data[i].id) {
        isError = false;
        data.splice(i,1);
        res.send("Deleted!");
        break;
      }
    }
    if (isError) {
      res.sendStatus(400);
    }
});
app.listen(8000);