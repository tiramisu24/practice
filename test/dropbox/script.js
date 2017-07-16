let data;
console.log("hello");
$.ajax({
  type: "GET",
  url: "http://localhost:9000/read"
}).then(d =>
  data = d;
  console.log(data);
)
