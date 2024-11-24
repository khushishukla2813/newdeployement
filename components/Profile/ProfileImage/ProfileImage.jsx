import React from 'react'
import styles from '../../../styles/Profile.module.css'
import Image from 'next/image'

function ProfileImage() {
    return (
        <div className={styles.profileImage} >
            <Image src="/Profile/vaibhavChutiya.jpg" height={320} width={300} />
        </div>
    )
}

export default ProfileImage