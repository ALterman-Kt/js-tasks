let users = new Map();
users.set("student 1", "beginner");
users.set("student 2", "professional");
users.set("student 3", "beginner");
users.set("student 4", "professional");
users.set("student 5", "beginner");


for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}