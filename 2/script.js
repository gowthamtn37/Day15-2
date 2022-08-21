let div1 = document.createElement("header");
div1.innerHTML=` PAGINATION `;

document.body.append(div1);

let div2 =document.createElement("div");
div2.setAttribute("class","box1");


let div3 =document.createElement("div");
div3.setAttribute("class","container");

let div4 =document.createElement("div");
div4.setAttribute("class","row");

let div5 =document.createElement("div");
div5.setAttribute("class","col-md-12");

let div6 =document.createElement("div");
div6.setAttribute("class","tbox");

let div7 =document.createElement("table");
div7.setAttribute("class","table");
div7.setAttribute("id","pager");

let div8 =document.createElement("tbody");

div7.innerHTML=
`
<thead class="thead-dark">
  <tr>
    <th scope="col">ID</th>
    <th scope="col">NAME</th>
    <th scope="col">LAST</th>
    
  </tr>
</thead>

`

foo1();
async function foo1(){
let api = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
let url = await api.json();
for (var  i =0; i<10; i++){
  let div8 =document.createElement("tr");
div8.innerHTML=`

<td>${url[i].id}</td>
<td>${url[i].name}</td>
<td>${i,url[i].email}</td>

`

div7.append(div8);

}}

div6.append(div7);
div5.append(div6);
div4.append(div5);
div3.append(div4);
div2.append(div3);
document.body.append(div2);

let div9 = document.createElement("div");
div9.setAttribute("class","pb")
div9.innerHTML=`<nav aria-label="Page navigation example">
<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
  <li class="page-item active"><a class="page-link" href="#">1</a></li>
  <li class="page-item"><a class="page-link" href="#">2</a></li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item"><a class="page-link" href="#">4</a></li>
  <li class="page-item"><a class="page-link" href="#">5</a></li>
  <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>
</nav>`

document.body.append(div9);