import React from 'react'
import Detail from './Detail'

export default function CVProject({ details }) {
  return (
      details.map(detail => {
          return <Detail key={detail.id} detail={detail} />
      })
  )
}
