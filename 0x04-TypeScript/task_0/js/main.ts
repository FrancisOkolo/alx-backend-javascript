interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Francis",
	lastName: "Okolo",
	age: 25,
	location: "Nigeria",

};

const student2: Student = {
	firstName: "Erick",
	lastName: "Sanches",
	age: 27,
	location: "USA",
}:

const studentsList: Student[] = [
	student1, 
	student2,
];

var html = "<table border = '1|1'>";
setTimeout(() => {
  html += "<th>";
  html += "<tr>";
  html += "<td>"+"First Name"+"</td>";
  html += "<td>"+"Last Name"+"</td>";
  html += "<td>"+"Age"+"</td>";
  html += "<td>"+"Location"+"</td>";
  html += "</tr>";
  html += "</th>"'
  
  for (var i = 0; i < studentsList.length; i++) {
    html += "<tr>";
    html += "<td>"+studentsList[i].firstName+"</td>";
    html += "<td>"+studentsList[i].lastName+"</td>";
    html += "<td>"+studentsList[i].age+"</td>";
    html += "<td>"+studentsList[i].location+"</td>";
    html += "</tr>";
  }

  document.getElementById("table").InnerHTML = html;
}, 500);

