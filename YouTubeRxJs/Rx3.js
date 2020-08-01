// 3. Operators

var button = document.querySelector('button');

// ####
var observable = Rx.Observable.interval(1000);

var observer = {
  next: function (value) {
    console.log(value);
  },
};

observable
  .map(function (value) {
    return value * 2;
  })
  .throttleTime(2000)
  .subscribe(observer);
