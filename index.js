/*1.Q You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
1.Access the author property and print it.
2.Modify the yearPublished property to 2022.
3.Add a new property genre to the book object with the value “Fiction”.
4.Delete the title property from the book object.
*/

var book = {
  "title" : "MyBook",
  "author" : "rishikesh",
  "yearPublished" : 2002
}

console.log(book);

console.log(book.author)//1.Access the author property and print it.

book['yearPublished'] = 2022;  //Modify the yearPublished property to 2022.
console.log(book.yearPublished)

book['genre']='Fiction'  //Add a new property genre to the book object with the value “Fiction”.
console.log(book)

delete book.title;  //Delete the title property from the book object.
console.log(book)


/*Question 2:
You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
1.Access the position property and print it.
2.Modify the salary property to 50000.
3.Add a new property department to the employee object with the value “HR”.
4.Delete the age property from the employee object. */


var employee = {
  "name": "Rishikesh",
  "age" : 21,
  "position": "Team Leader",
  "Salary" : "10LAP"

}

console.log(employee.position)//Access the position property and print it.

employee['Salary'] = 50000 //Modifed the salary property to 50000.
console.log(employee) 

employee['Department'] = "HR" //Added a new property department to the employee object with the value “HR”.
console.log(employee);

delete employee.age; //Deleted the age property from the employee object.
console.log(employee)


/*Question 3:
You are given an object product with the properties id, name, price, and category. Perform the following operations:
1.Access the price property and print it.
2.Modify the category property to “Electronics”.
3.Add a new property inStock to the product object with the value true.
Delete the id property from the product object.*/

var product = {
  "id" : 1,
  "name" : "Cross",
  "price" : 1800,
  "Category" : "slipper"
}

console.log(product);
console.log(product.price) //Access the price property and print it.

product['Category'] = "Electronics"; //Modified the category property to “Electronics”.
console.log(product.Category);

product['inStock'] = true; //Added a new property inStock to the product object with the value true.

console.log(product);


delete product.id;  //Deleted the id property from the product object.
console.log(product)


/*Question 4:
You are given an object car with the properties make, model, year, and color. Perform the following operations:
1.Access the make property and print it.
2.Modify the color property to “Black”.
3.Add a new property engineType to the car object with the value “V6”.
4.Delete the year property from the car object. */

var car = {
  "modal" : "x7vi",
  "year": 2007,
  "color" : "green"

}

console.log(car) //Access the make property and print it.

car['color'] = "black"; //Modify the color property to “Black”.
console.log(car.color);

car['engineType'] = "v6"; //Added a new property engineType to the car object with the value “V6”.
console.log(car);

delete car.year; //Delete the year property from the car object.
console.log(car)


/*Question 5:
You are given an object student with the properties name, age, grade, and school. Perform the following operations:
1.Access the school property and print it.
2.Modify the grade property to 95.
3.Add a new property hobbies to the student object with the value ["reading", "sports"].
4.Delete the age property from the student object.*/

var student = {
  "name" : "Rishikesh",
  "age" : 21,
  "grade" : "c+",
  "School": "Delhi Public School"
}
//1.Access the school property and print it.
console.log(student.School)

//2.Modify the grade property to A+.
student.grade = "A+"; 
console.log(student);

//3.Add a new property hobbies to the student object with the value ["reading", "sports"].
student['hobbies'] = ["reading", "sports"]; 
console.log(student);

//4.Delete the age property from the student object.
delete student.age;
console.log(student.age)


/*Question 6:
Perform the following operations:
1.Access the city property from the address object and print it.
2.Modify the theme property in the preferences object to “light”.
3.Add a new property phone to the profile object with the value “555-9876”.
4.Delete the zip property from the address object.*/

const user = {
  username: "john_doe",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Gotham",
      zip: "54321"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
};

//1.Access the city property from the address object and print it.
console.log(user.profile.address.city);
//2.Modify the theme property in the preferences object to “light”.
user.preferences.theme = "light";
console.log(user.preferences.theme);
//3.Add a new property phone to the profile object with the value “555-9876”.
user.profile["phone"] = '555-9876';
console.log(user.profile);
//4.Delete the zip property from the address object.
delete user.profile.address.zip


/*Question 7:
Perform the following operations:
1.Access the email of the second employee (Bob) and print it.
2.Modify the phone number of Alice to “555-1111”.
3.Add a new property department with the value “Engineering” to the first employee (Alice).
4.Delete the location property from the company object.*/

const company = {
  name: "Tech Solutions",
  employees: [
    {
      name: "Alice",
      position: "Developer",
      contact: {
        email: "alice@tech.com",
        phone: "555-2345"
      }
    },
    {
      name: "Bob",
      position: "Manager",
      contact: {
        email: "bob@tech.com",
        phone: "555-6789"
      }
    }
  ],
  location: "New York"
};
console.log(company)
//1.Access the email of the second employee (Bob) and print it.
console.log(company.employees[1].contact.email);
//2.Modify the phone number of Alice to “555-1111”.
company.employees[0]['phone'] = "555-111";
console.log(company.employees[0]['phone']);
//3.Add a new property department with the value “Engineering” to the first employee (Alice).
company.employees[0]['Department']="Engineering";
console.log(company.employees[0]['Department']);
//4.Delete the location property from the company object.
delete company.location;
console.log(company)


