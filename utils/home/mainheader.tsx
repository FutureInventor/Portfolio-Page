import React from 'react'
import styles from './mainheader.module.scss'
import { useTypedText } from '../typingtext'

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello everyone!", 50)}
        <br/>
        {useTypedText("I'm Karolina.", 50, 200)}
      </h1>
      <h2>
        {useTypedText("Welcome on my portfolio page! I'm a Software Developer & Content Creator, currently working as TypeScript React Web Developer. Living in Cracow, Poland.", 30, 350)}
      </h2>
    </div>
  )
}