import Image from 'next/image'
import WomanImg from 'public/assets/home/Woman-redesign.png'
import YearBookImg from 'public/assets/home/YearBook-redesign.png'
import s from './Banners.module.css'

export const Banners = (): JSX.Element => {
  return (
    <>
      <div className={s.imageContainer}>
        <Image
          priority
          src={WomanImg}
          alt="leblanc woman"
          width={3840}
          height={5582}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className={s.imageContainer}>
        <Image
          priority
          src={YearBookImg}
          alt="leblanc year book"
          width={2880}
          height={3621}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </>
  )
}
