# react-responsive-table-lightweight

> Lightweight responsive table component for React applications, no dependencies.

[![NPM](https://img.shields.io/npm/v/react-responsive-table-lightweight.svg)](https://www.npmjs.com/package/react-responsive-table-lightweight) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-responsive-table-lightweight
```

## Usage

```jsx
import React, { Component } from 'react'

import LTable from 'react-responsive-table-lightweight'

class Example extends Component {
  render () {
  
      let columns = {
          name: "Name",
          surname: "Surname",
          address: "Street address"
      };
      
      let rows = [
          {
              name : "John",
              surname: "Doe",
              address: "Dover Street 18"
          },
          {
              name : "Mark",
              surname: "Wilton",
              address: "Williams St. 2"
          }
      ];
  
    return (
      <LTable rows={rows} columns={columns} styles={false} />
    )
  }
}
```

## Instructions

Only two props need to be passed to the component - *columns* and *rows* (*styles* is optional and can be included to extend default styling)

*Columns* is an object denoting titles of table columns. 

*Rows* is an array of objects where keys of those objects need to match *columns* keys.


## License

MIT © [zannix](https://github.com/zannix)
