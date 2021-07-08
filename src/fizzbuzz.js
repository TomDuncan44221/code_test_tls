    var i  = 0
    var n = 0;
    var fizz = 0;
    var buzz = 0;
    var fizzbuzz = 0;
    var test;




    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    readline.question('What is your number? \t', n => {
        console.log();
        for (i=1; i<=n; i++)
        {
            console.log(i);
            if (i%3 == 0)
                console.log("Fizz \t");
                fizz +=1;
            if ((i%5) == 0)
            {
                console.log("Fizz \t")
                fizz +=1;
            }
            if ((i%3 && i%5) == 0)
            {
                console.log("FizzBuzz \t");
                fizz +=1;
            }
            else 
                console.log("%d\t", i);
            console.log("End")
        }
        /* Print fiiz for %3,
         buzz for %5
         fizzbuzz for %3 and %5

        readline.close();*/

        console.log(fizz, buzz, fizzbuzz);
    });
