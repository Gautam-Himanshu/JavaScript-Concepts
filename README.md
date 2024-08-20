# Throttle and Debounce Utility Functions

This repository contains JavaScript implementations of two key utility functions: `throttle` and `debounce`. These functions are designed to optimize performance by controlling the rate of function execution, which is useful for scenarios like handling user input and managing event-driven tasks.

## Table of Contents

- [Throttle](#throttle)
- [Debounce](#debounce)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)

## Throttle

**Definition:**  
Throttle ensures that a function is executed at most once per specified time interval. This function limits the rate of execution, making it useful for scenarios where you want to control how frequently a function is called, such as during scroll or resize events.

## Debounce

**Definition:**  
Debounce delays the execution of a function until after a specified period of inactivity. It ensures that the function is executed only once after the user has stopped performing actions, making it ideal for handling scenarios like search input where you want to minimize the number of function calls.

## Usage

- **Throttle:**  
  Use this function to limit the rate at which a function is executed. This is helpful for controlling performance-intensive operations or rate-limiting user actions.

- **Debounce:**  
  Use this function to delay the execution of a function until a period of inactivity has passed. This is beneficial for reducing the frequency of function calls in response to continuous user input or events.

## Examples

- **Throttle Example:**  
  Typically used for managing the frequency of events such as scrolling or resizing, ensuring that the function is called at most once per specified interval.

- **Debounce Example:**  
  Commonly used for search inputs or form validations, ensuring that the function is called only after the user has stopped typing or interacting for a specified delay.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
