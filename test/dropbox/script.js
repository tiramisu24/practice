let data;
console.log("hello");
$.ajax({
  type: "GET",
  url: "http://localhost:9000/read"
}).then(d =>{
  data = d;
  CreateList();

});

const CreateList = () =>{
  const names = Object.keys(data);
  const module = $("#module");
  for(let i = 0; i < names.length; i++){
    module.append($("<button/>", {
                    text:names[i],
                    onClick:clickButton
                  }))
  }
}
const clickButton = (data) =>{
  // data.preventDefault();
  console.log(data);
}
