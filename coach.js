"use strict";

// Створіть клас Coach, який буде представляти тренера. Додайте властивості, такі як ім'я, спеціалізація та рейтинг.
// Також реалізуйте метод для виведення інформації про тренера та його рейтинг.

const ERROR_MESSAGE = "One of values is not a valid number";

class Coach {
  constructor(name, specialization, rating) {
    this.name = this.#validateName(name);
    this.specialization = this.#validateSpecialization(specialization);
    this.rating = this.#validateRating(rating);
  }

  displayInfo() {
    return `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`;
  }

  #validateName(name) {
    if (name?.trim() && typeof name === 'string') {
      return name;
    }

    return "Some Name";
  }

  #validateSpecialization(specialization) {
    if (specialization?.trim() && typeof specialization === 'string') {
      return specialization;
    }

    return "Some specialization";
  }

  #validateRating(rating) {
    if (typeof rating === 'number' && 0 <= rating) {
      return rating;
    }

    return 0.00;
  }
}
