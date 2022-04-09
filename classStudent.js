class Student {
  constructor({
    name,
    email,
    username,
    twitter,
    instagram,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter: twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar() {
    console.log(this.studentName + " (" + this.studentRole + " )");
    console.log(this.content);
    console.log(this.likes + " likes");
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.log(
        "Lo sentimo, " +
          this.name +
          ", no puedes tomar este curso que no es free"
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    if (newCourse.lang != "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.log(
        "Lo sentimo, " + this.name + ", no puedes tomar este curso en ingles"
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "teacher",
    });
    comment.publicar();
  }
}

class Courses {
  constructor({
    courseId,
    name,
    teacher = "",
    clases = [],
    isFree = false,
    lang = "spanish",
  }) {
    this.courseId = courseId;
    this._name = name; //_ Privado
    this.teacher = teacher;
    this.clases = clases;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "Curso Malo") {
      console.error("Curso no permitido");
    } else {
      this._name = newName;
    }
  }
  //   changeName(newName){
  //       this._name
  //   }
}

const ProgBasic = new Courses({
  courseId: 10,
  name: "Programming Basic",
  teacher: "Freddy",
  isFree: true,
});

//ProgBasic.name = "";
//ProgBasic.

const JSAdvanced = new Courses({
  courseId: 1000,
  name: "Javascript advanced",
  teacher: "Pepito",
  lang: "english",
});

const Angular5 = new Courses({
  courseId: 2000,
  name: "Angular 5",
  teacher: "Maria",
  lang: "spanish",
});

const AngularBasic = new Courses({
  courseId: 3000,
  name: "Angular Basic",
  teacher: "Anahi",
  isFree: true,
  lang: "english",
});

const MongoDB = new Courses({
  courseId: 4000,
  name: "Mongo db",
  teacher: "Leonidas",
  isFree: true,
  lang: "english",
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const EscuelaAngular = new LearningPath({
  name: "Ruta de Angular",
  courses: [JSAdvanced, MongoDB],
});

const EscuelaJS = new LearningPath({
  name: "Escuela de JS",
  courses: [ProgBasic, AngularBasic, MongoDB],
});

const daniel = new FreeStudent({
  name: "daniel",
  username: "danielpqe",
  email: "danielpqe@gmail",
  twitter: "danielpqe",
  approvedCourses: [JSAdvanced, Angular5],
});

const daniel2 = new BasicStudent({
  name: "daniel2",
  username: "danielpqe2",
  email: "danielpqe@gmail2",
  twitter: "danielpqe2",
  learningPaths: [EscuelaAngular],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "fredduer@gmail",
  twitter: "freddyvega",
  learningPaths: [EscuelaAngular],
});
