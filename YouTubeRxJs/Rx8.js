// 8. scan() vs reduce()

var observable = Rx.Observable.of(1,2,3,4,5);

observable
.scan((total, currentValue) => {
    return total+ currentValue;
},0)
// .reduce((total, currentValue) => {
//     return total+ currentValue;
// },0)
.subscribe({
    next: function(value) {
        console.log(value);
    }
})
