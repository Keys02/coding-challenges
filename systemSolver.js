/*
    [a b c | d]
    [e f g | h]
    [i j k | l]

    det = a(f(k)-j(k))-b(e(k)-i(g))+c(e(j)-i(f))

   dx = [d b c]
        [h f g]
        [l j k]

   dy = [a d c]
        [e h g]
        [i l k]
    
   dz = [a b d]
        [e f h]
        [i j l]
*/

// This is for 3x3 Matrix
function solveSystem(a,b,c,d,e,f,g,h,i,j,k,l){
    let det = a*(f*k-j*g)-b*(e*k-i*g)+c*(e*j-i*f)   
    if(det==0){
        //The system is inconsistent
        return "The system has no solution or infinitely many solutions"
    }else{
        //The system has a unique solution
        let dX,dY,dZ, x, y, z;
        dX = d*(f*k-j*g)-b*(h*k-l*g)+c*(h*j-l*f);
        dY = a*(h*k-l*g)-d*(e*k-g*i)+c*(e*l-i*h);
        dZ = a*(f*l-j*h)-b*(e*l-i*h)+d*(e*j-i*f);

        //Solutions of the system
        x = dX/det;
        y = dY/det;
        z = dZ/det;

        //Summary
        return {x:x, y:y, z:z}
    }

}

let result1 = solveSystem(1,2,-1,-3,2,-4,1,-7,-2,2,-3,4);
let result2 = solveSystem(2,-5,3,1,1,-2,-2,8,0,0,0,0);
console.log(result1);
console.log(result2);