// 7. debounceTime & distinctUntilChanged

var input = document.querySelector('input');

var observable = Rx.Observable.fromEvent(input, 'input');

observable
  .map((event) => event.target.value)
  .debounceTime(500) // 2sec of pause and emits the value
  .distinctUntilChanged()
  .subscribe({
    next: function (value) {
      console.log(value);
    },
  });
