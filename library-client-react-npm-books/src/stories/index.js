import React from 'react';
import {storiesOf} from '@storybook/react';
import App from "./App";

const items = [{id:1, name:'Book 1', price:100}, {id:2, name:'Book 2', price:200}, {id:3, name:'Book 3', price:300}];


storiesOf('Example components from module "library-client-react-npm-books"', module)
    .add('BookList', () => <App bookList={items}/>);
