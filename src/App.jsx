import React from 'react'



import { useState, useEffect } from 'react'


import './App.css'

function App() {
  const [News, setNews] = useState([]);

  const fetchdata = async () => {
    try {

      const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-04-27&sortBy=publishedAt&apiKey=8083814e7994420099c0b9a6ea61f596");
      const data = await res.json();

      setNews(data.articles);
      console.log(data.articles || []);
      
    } catch (error) {

      console.log(error)
      
    }
  }

  useEffect(() => {
    fetchdata()
  },[])

  return (
    <>
      <div className='head'>
        <h1>GLOBAL NEWS</h1>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact</li>
        </ul>
      </div>
      {News.length ? (
        News.map((New,index) => (

          <div className='newspaper' key={index}>
            <p id='title'>Title : {New.title}</p>
            <img src={New.urlToImage} alt="post-picture" />
             <p id='date'>Published on: {New.publishedAt}</p>
            <p id='author'>Author: {New.author}</p>
            <p id='content'>{New.content}</p>
            <p id='description'>{New.description}</p>
             <p id='link'>link : {New.url}</p>
            
            
        </div>
          
        ))
      ) : (
          
          <h2>No data is available</h2>
     )}
      
    </>
  )
}

export default App
