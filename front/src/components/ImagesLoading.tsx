import styles from '@/components/ImagesLoading.module.css'
import ContentLoader from 'react-content-loader'

export default function ImagesLoading() {
  return (
    <div className={styles.containerGrid}>
      <ContentLoader viewBox='0 0 500 280' height={200} width={200}>
        <rect x='3' y='3' rx='10' ry='10' width='480' height='180' />
        <rect x='6' y='190' rx='0' ry='0' width='150' height='20' />
        <rect x='4' y='215' rx='0' ry='0' width='480' height='20' />
        <rect x='4' y='242' rx='0' ry='0' width='460' height='20' />
      </ContentLoader>
      <ContentLoader viewBox='0 0 500 280' height={200} width={200}>
        <rect x='3' y='3' rx='10' ry='10' width='480' height='180' />
        <rect x='6' y='190' rx='0' ry='0' width='150' height='20' />
        <rect x='4' y='215' rx='0' ry='0' width='480' height='20' />
        <rect x='4' y='242' rx='0' ry='0' width='460' height='20' />
      </ContentLoader>
      <ContentLoader viewBox='0 0 500 280' height={200} width={200}>
        <rect x='3' y='3' rx='10' ry='10' width='480' height='180' />
        <rect x='6' y='190' rx='0' ry='0' width='150' height='20' />
        <rect x='4' y='215' rx='0' ry='0' width='480' height='20' />
        <rect x='4' y='242' rx='0' ry='0' width='460' height='20' />
      </ContentLoader>
      <ContentLoader viewBox='0 0 500 280' height={200} width={200}>
        <rect x='3' y='3' rx='10' ry='10' width='480' height='180' />
        <rect x='6' y='190' rx='0' ry='0' width='150' height='20' />
        <rect x='4' y='215' rx='0' ry='0' width='480' height='20' />
        <rect x='4' y='242' rx='0' ry='0' width='460' height='20' />
      </ContentLoader>
      <ContentLoader viewBox='0 0 500 280' height={200} width={200}>
        <rect x='3' y='3' rx='10' ry='10' width='480' height='180' />
        <rect x='6' y='190' rx='0' ry='0' width='150' height='20' />
        <rect x='4' y='215' rx='0' ry='0' width='480' height='20' />
        <rect x='4' y='242' rx='0' ry='0' width='460' height='20' />
      </ContentLoader>
      <ContentLoader viewBox='0 0 500 280' height={200} width={200}>
        <rect x='3' y='3' rx='10' ry='10' width='480' height='180' />
        <rect x='6' y='190' rx='0' ry='0' width='150' height='20' />
        <rect x='4' y='215' rx='0' ry='0' width='480' height='20' />
        <rect x='4' y='242' rx='0' ry='0' width='460' height='20' />
      </ContentLoader>
    </div>
  )
}
