var button = document.querySelector('button');
////2.  Observables, Observers & Subscriptons

// var observer = {
//   next: function(value) {
//     console.log(value.clientX);
//   },
//   error: function(error) {
//     console.log(error);
//   },
//   complete: function() {
//     console.log('Completed');
//   }
// };

// Rx.Observable.fromEvent(button, 'click')
//    .subscribe(observer);

//// creating observable from scratch

var observer = {
  next: function (value) {
    console.log(value);
  },
  error: function (error) {
    console.log(error);
  },
  complete: function () {
    console.log('Completed');
  },
};

//   Rx.Observable.create(function(obs) {
//     obs.next('A value');
//   })
//   .subscribe(observer);

// var subscription = Rx.Observable.create(function (obs) {
//   obs.next('A value');
//   //obs.error('error');
//   setTimeout(function () {
//     obs.complete();
//   }, 2000);
//   obs.next('A second Value');
// }).subscribe(observer);


// ####
var subscription = Rx.Observable.create(function (obs) {
  button.onclick = function (event) {
    obs.next('click'); //next will emit a value
  };
}).subscribe(observer);

//unsubsribe after 5ms
setTimeout(function() {
  subscription.unsubscribe();
}, 5000);
