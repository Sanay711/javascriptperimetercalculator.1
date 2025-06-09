var choice = prompt("Welcome to Perimeter Calculator. \n Pleas Enter your Choice \n1.Area of a Rectangle. \n2.Area of a Triangle. \n3.Area of a Circle. \n4.Area of a Parallelogram.");

if (choice =='1') {
    var l = prompt('Enter the Length')
    var b = prompt('Enter the Breadth')
    var result = Number(l) + Number(b) * 2
    alert('The Perimeter is '+ result)
}

if (choice =='2') {
    var side1 = prompt('Enter the Length of Side1')
    var side2 = prompt('Enter the Length of Side 2')
    var side3 = prompt('Enter the Length of Side 3')
    var result = Number(side1) + Number(side2) + Number(side3)
    alert('The Perimeter is '+ result)
}
    if (choice =='3') {
    var r = prompt('Enter The Radius')
    var result = 2 * 3.14 * Number(r)
    alert('The Area is '+ result)
}

if (choice =='4') {
    var side = prompt('Enter the Length of the Side')
    var b = prompt('Enter the Base')
    var result = 2 * Number(side) + Number(b) 
    alert('The Perimeter is '+ result)
}

