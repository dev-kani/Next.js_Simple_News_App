import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/eom.module.css'

const eom = ({ employee }) => {
  console.log(employee)
  return (
    <Layout >
      <div className={styles.pageContainer}>
        <h1 className={styles.eomTitle}>Employee of the Month</h1>
        <div className={styles.cardContainer}>
          {employee.results.map((person, index) => {
            return (
              <div key={index} >
                <div className={styles.imgContainer}>
                  <img src={person.picture.large} alt="" />
                </div>
                <div className={styles.details}>
                  <h3>{person.name.title}. {person.name.first} {person.name.last}</h3>
                  <p>{person.location.city},</p>
                  <p>{person.location.country}</p>
                  <p>Phone: {person.phone}</p>
                </div>
              </div>)
          })}
        </div>
      </div>
    </Layout >
  )
}

export const getServerSideProps = async () => {
  const apiResponse = await fetch(
    'https://randomuser.me/api/?results=1'
  )
  const employee = await apiResponse.json()
  return {
    props: {
      employee
    }
  }
}

export default eom