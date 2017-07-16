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
    let button = $("<button/>", {
                  text:names[i],
                  className:'candidate-names'
                });
    button.on('click', clickButton);
    module.append(button)
  }
}
const clickButton = (e) =>{
  e.preventDefault();

  console.log(e.target.innerHTML);
}
