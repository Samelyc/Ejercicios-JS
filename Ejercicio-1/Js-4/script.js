/* 
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console. */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


function cursosEnComun(curso1, curso2) {
   
    const cursosEnComun = curso1.filter(curso => curso2.includes(curso));

    if (cursosEnComun.length > 0) {
        console.log('Cursos en común:', cursosEnComun);
    } else {
        console.log('No se encontraron cursos en común.');
    }
}

cursosEnComun(student1Courses, student2Courses);

