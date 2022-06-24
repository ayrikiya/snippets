function log(){
    console.log.apply(console, arguments)
}

var A = [ 4, 6, 1, 9, 3, 0, 3, 7, 2, 8, 4, 10, 6 ];

function selectSort(A) {
    var length = A.length;
    for(let i=0; i < length - 1; i++){

        for(let j=i+1; j < length; j++){
            if(A[i] > A[j]){
                let temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }
    }
}

selectSort(A)
log(A)