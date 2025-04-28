class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
      return true;
    }
    return false;
  }

  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

function testLibrary() {
  const library = new Library("Центральная библиотека");

  library.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(
    new DetectiveBook("Артур Конан Дойл", "Шерлок Холмс", 1892, 307)
  );
  library.addBook(new Magazine("Наука и жизнь", 1965, 80));

  console.log("Всего книг в библиотеке:", library.books.length);

  const foundBook = library.findBookBy("releaseDate", 1972);
  console.log("Найдена книга:", foundBook ? foundBook.name : "не найдена");

  const givenBook = library.giveBookByName("Пикник на обочине");
  console.log("Выдана книга:", givenBook ? givenBook.name : "не найдена");
  console.log("Осталось книг:", library.books.length);

  if (givenBook) {
    givenBook.state = 20;
    console.log("Состояние после повреждения:", givenBook.state);
    givenBook.fix();
    console.log("Состояние после восстановления:", givenBook.state);

    const returned = library.addBook(givenBook);
    console.log("Книга возвращена:", returned);
    console.log("Теперь книг в библиотеке:", library.books.length);
  }
}

testLibrary();

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.log(`Ошибка: оценка ${mark} по предмету ${subject} недопустима`);
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
    console.log(`Добавлена оценка ${mark} по предмету ${subject}`);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      console.log(`По предмету ${subject} нет оценок`);
      return 0;
    }

    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    const average = sum / this.marks[subject].length;
    return average;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      console.log("Нет предметов с оценками");
      return 0;
    }

    const totalSum = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalSum / subjects.length;
  }
}

const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");

console.log("Средний балл по физике:", student.getAverageBySubject("физика"));
console.log(
  "Средний балл по биологии:",
  student.getAverageBySubject("биология")
);
console.log("Общий средний балл:", student.getAverage());
