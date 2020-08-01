// 9. pluck() | RxJS Tutorial


var input = document.querySelector('input');

var observable = Rx.Observable.fromEvent(input, 'input');

observable
  .pluck('target', 'value') //pluck instead of map
  .debounceTime(500) // 2sec of pause and emits the value
  .distinctUntilChanged()
  .subscribe({
    next: function (value) {
      console.log(value);
    },
  });
