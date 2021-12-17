var gp = [];

function add()
{
    do
    {
        var n1 = prompt("Enter Name:");
    }
    while(n1.length<3);
    // var n1 = prompt("Enter Name:");
    do
    {
        var n2 = prompt("Enter Contact Number:");
    }
    while(isNaN(n2) || n2.length != 10);
    
    var n3 = prompt("Enter E-mail:");

    var z = [n1,n2,n3];
    gp.push(z);
    // document.write(gp);
    document.write("Name: " + n1+ ", Number: +91 " + n2 + ", E-mail: " + n3 );
    return(z)
}

add()



