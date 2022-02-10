import React from 'react'
import styles from './loader.module.css'
import GridLoader from 'react-spinners/GridLoader'

const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <GridLoader size={15} speedMultiplier={1.5} margin={3} color='#6c7dfe'/>
    </div>
  )
}

export default Loader
