var cl = console.log;
var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var btnAdd = document.getElementById("btnAdd");
var add = function (n1, n2) {
    console.log(n1 + n2);
};
btnAdd.addEventListener("click", function () {
    add(+n1.value, +n2.value);
});
//Type Assertion
var x = 10;
//let x:number
var p;
p = 123;
p = true;
//union of literals
var data = [
    {
        fn: 'John',
        lname: 'Doe',
        email: null
    },
    {
        fn: 'Jen',
        lname: 'Doe',
        email: 'jdoe@gmail.com'
    },
    {
        fn: 'Jenny',
        lname: 'Doe',
        email: 'jen@gmail.com'
    }
];
for (var i of data) {
    // cl(i.email)
    cl(i.email?.toLowerCase());
}
