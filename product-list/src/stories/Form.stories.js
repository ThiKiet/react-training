import React from 'react';
import { action } from '@storybook/addon-actions';
import 'bootstrap/dist/css/bootstrap.css';
import App from '../index';

export default {
  component: App,
  title: 'App',
};

export const addProduct = () => <App />;
