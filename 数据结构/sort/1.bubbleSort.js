function log(){
    console.log.apply(console, arguments)
}

var A = [ 4, 6, 1, 9, 3, 0, 3, 7, 2, 8, 4, 10, 6 ];

function bubbleSort(A) {
    var length = A.length;
    for (let i = 0; i < length; i++) {
        let flag = false;

        for (let j = length-1; j > i; j--) {
            if (A[j] < A[j-1]){
                var temp  = A[j];
                A[j] = A[j-1];
                A[j-1] = temp;
                
                flag =  true;
            }
        }
        if (flag == false) {
            return;
        }
    }
}

bubbleSort(A)
log(A)
