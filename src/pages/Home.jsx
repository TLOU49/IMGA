import React from 'react'
import { TaskBar } from '../components/TaskBar';
import { Header } from '../components/layouts/Header';
import SearchBar from '../components/layouts/SearchBar';
import Pictures from '../Pictures';

export const Home = () => {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <Pictures/>
    </div>
  )
}
