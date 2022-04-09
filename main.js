const natalia = {
  name: "Natalia",
  age: 36,
  cursosAprobados: ["Node js", "POO"],
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

//natalia.cursosAprobados.push("Typescript");

//Nuevo prototipo

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  //   this.aprobarCurso = function (neuvoCurso) {
  //     this.cursosAprobados.push(neuvoCurso);
  //   };
}

//creacion de metodos en el prototipo del objeto
Student.prototype.aprobarCurso = function (neuvoCurso) {
  this.cursosAprobados.push(neuvoCurso);
};

//instancia del objeto, hereda los metodos en el prototipo
const juanita = new Student("Juanita", 15, ["PHP", "JS", "CSS"]);

//Prototipos con la sintaxis de clases

class Student2 {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //   this.aprobarCurso = function (neuvoCurso) {
    //     this.cursosAprobados.push(neuvoCurso);
    //   };
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const daniel = new Student2("Daniel", "20", [
  "Java",
  "Spring",
  "Arquitectura del computador",
]);

class Student3 {
  constructor({ name, email, age, cursosAprobados = ["nada"] }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //   this.aprobarCurso = function (neuvoCurso) {
    //     this.cursosAprobados.push(neuvoCurso);
    //   };
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const daniel3 = new Student3({ name: "Daniel", age: "20", email: "danielpqe" });
