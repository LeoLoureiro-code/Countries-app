# Countries Information App

A responsive countries information application built with Angular. This project consumes data from the REST Countries API and demonstrates concepts such as API integration, component communication, routing, theme management, and centralized state handling through Angular services.

Users can search for countries by name or filter them by region, view detailed information about each country, and switch between light and dark themes.

---

## Overview

### The Challenge

Users should be able to:

* Search for countries using the search input field
* Filter countries by region
* View detailed information about a selected country
* Switch between light and dark themes
* Experience a responsive layout optimized for different screen sizes
* See hover and focus states for interactive elements

---

### Screenshot

![App Screenshot](./screenshots/screenshot.png)

---

### Links

* **Solution URL:** https://github.com/LeoLoureiro-code/Countries-app
* **Live Site URL:** https://leoloureiro-code.github.io/Countries-app

---

## My Process

### Built With

* Semantic HTML5
* CSS Custom Properties
* Flexbox & CSS Grid
* Angular 20
* Angular Standalone Components
* Angular Routing
* Angular Services
* Angular HttpClient
* REST Countries API
* Responsive Design Principles

---

## What I Learned

This project helped reinforce several important frontend development concepts using Angular:

* Managing and sharing state between components using Angular services
* Communicating between parent and child components using `@Input` and `@Output` decorators

```typescript
@Output()
regionSelected = new EventEmitter<string>();
```

* Implementing theme switching across multiple pages through a shared service

```typescript
changeTheme() {
  this.theme === 'Light'
    ? this.theme = 'Dark'
    : this.theme = 'Light';

  document.body.className = this.theme;
}
```

* Consuming external APIs using Angular's `HttpClient`
* Working with dynamic routes to display country details pages
* Applying filtering and search functionality while maintaining a clean user experience

---

## Continued Development

In future iterations of this project, I would like to:

* Add unit tests for components and services
* Improve type safety by replacing `any` types with TypeScript interfaces
* Implement caching strategies to avoid unnecessary API requests
* Enhance accessibility following WCAG guidelines
* Explore more advanced state management solutions for larger applications
