'use client'

import {useState} from 'react';

export const galleryList = [
  {
    name: 'gallery 1', 
    desc: 'This is the description for the first image'
  },  
  {
    name: 'gallery 2', 
    desc: 'This is the description for the second image'
  }, 
  {
    name: 'gallery 3', 
    desc: 'This is the description for the third image'
  }, 
  {
    name: 'gallery 4', 
    desc: 'This is the description for the last image'
  }

]


export default function Test() {

  const[index, setIndex] = useState(0);

  let gallery = galleryList[index];


  function handlePrev(){
    if(index > 0) {
      setIndex(index - 1);
    } else{
      setIndex(galleryList.length - 1);
    }
  }

  function handleNext() {
    if(index < galleryList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }


	return (
		<>
      <div className="wrapper">
        <p>
          {gallery.name}<br />
          {gallery.desc}
        </p>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
	);
}