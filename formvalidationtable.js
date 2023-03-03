let headers=[{header:"Id",key:"id"},{header:"First Name",key:"firstName"},{header:"Last Name",key:"lastName"},{header:"Phone No",key:"phoneNo"},{header:"Personal Email",key:"personalEmail"},{header:"Corporate Email",key:"corporateEmail"},{header:"Salary",key:"salaryValue"},{header:"Password",key:"passwordValue"}];

let table=document.createElement("table");
table.setAttribute("id","tableid");
console.log(table);
let thead=table.createTHead();
let thr=thead.insertRow();
for (const iterator of headers) {
    let th=document.createElement("th");
    thr.appendChild(th);
    let thtext=document.createTextNode(iterator.header);
    th.appendChild(thtext);
    
}
let tbody=table.createTBody();
fetch("http://localhost:3000/validate").then((response)=>response.json()).then((data)=>{
    for (const element of data) {
        // console.log(iterator);
        let tr=tbody.insertRow();
        for (const iterator of headers) {
            let cell=tr.insertCell();
            let text=document.createTextNode(element[iterator["key"]]);+
            cell.appendChild(text);
        }
    }
});
let body=document.querySelector("body");
body.append(table);
function searchFunction(){
    let filter=document.getElementById("searchinput").value.toUpperCase();
    //touppercase left
    let mytable=document.getElementById("tableid");
    let tr=mytable.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        let td=tr[i].getElementsByTagName("td")[1];
        if(td){
            let text=td.innerHTML || td.textContent;
            if(text.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }

    }
 
}
searchFunction();


