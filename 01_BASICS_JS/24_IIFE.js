// Immediately Invoked Function Expression (IIFE)

// named IIFE -->
(function chai (){
    console.log("DB connected");
})();
// (;) --> this cause error sometimes

// Syntax :
// (def of function)(execution call)  --> ()()

// Interview :
// Global scope pollution of variables cause problem so to avoid that IIFE is used

// unnamed IIFE -->
( (name) => {console.log(`DB connected Two ${name}`);
})("Vivek");


// | 🔎 Use Case            | ✅ Benefit                            |
// | ---------------------- | ------------------------------------ |
// | Create a private scope | Avoid polluting global variables     |
// | Run code immediately   | Like initializing a module/config    |
// | Avoid name collisions  | Helpful in large or legacy codebases |
