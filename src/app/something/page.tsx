'use client'
import Link from 'next/link'
import React from 'react'
import useFetchCntr from '../hooks/useFetchCntr';

const Something = () => {
    const { data, error, isLoading } = useFetchCntr();
    if (isLoading) return <h1>LOADING . . . </h1> 
    if (error) return <h1>{error.message}</h1> 
    console.log(data)
  return (
    <>
    {data.map(({}) => {
    })}
    </>
  )
}

export default Something
