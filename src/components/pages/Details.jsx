import React from 'react'
import getPikachu from '../../utils/getPikachu'
console.log('test')
export default function Details() {
  const data = getPikachu(`details-getPikachu`);
  return (
    <div>
      {data.name}
    </div>
  )
}
