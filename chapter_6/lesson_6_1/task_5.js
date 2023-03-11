let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Рекурсия
const printList = (list) => {
  if (list.next) {
    printList(list.next);
  }
  console.log(list.value);
};

printList(list);

// Цикл;
const printListArr = (list) => {
  let obj = list;
  const arr = [];
  while (obj) {
    arr.push(obj.value);
    obj = obj.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

printListArr(list);
