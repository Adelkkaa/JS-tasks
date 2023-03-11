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
  console.log(list.value);
  if (list.next !== null) {
    printList(list.next);
  }
};

printList(list);

// Цикл
const printListArr = (list) => {
  let obj = list;
  do {
    console.log(obj.value);
    obj = obj.next;
  } while (obj.next);
  console.log(obj.value);
};

printListArr(list);
