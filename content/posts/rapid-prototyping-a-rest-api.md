---
title: "Rapid Prototyping a Rest Api"
date: 2020-05-24T12:26:50-03:00
draft: false
image: /images/Rapid-prototyping-a-REST-API-with-json-server.png
description: Sometimes we need a full fake REST API to prototype new products and mock new functionalities. The json-server package provides a quick and easy way to do that.
---

Sometimes we need a full fake REST API to prototype new products and mock new functionalities. The [json-server](https://github.com/typicode/json-server) package provides a quick and easy way to do that.


```bash
npm init -y
npm i json-server
```

Then we create a db.json file with a JSON object representing the resources we want to provide CRUD API access.

```json
{
 "podcasts": [
    {
      "id": 1,
      "name": "Podcast 1",
      "url": "https://testurl.com/api/v3/profile/aaaa"
    },
    {
      "id": 2,
      "name": "Podcast 2",
      "url": "https://testurl.com/api/v3/profile/bbbb"
    }
  ],
}
```

Change your package.json scripts property:

```javascript
"scripts": {
    "start": "json-server --watch db.json"
},
```

And then you're ready to run your REST API

```bash
npm start
```

![json-server](/images/json-server.png)