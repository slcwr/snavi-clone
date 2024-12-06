// pages/csvupload/index.tsx
import dynamic from 'next/dynamic'

const CsvUploadComponent = dynamic(
  () => import('../../components/organisms/CsvUproad/CsvUploadComponent'),
  { ssr: false }
)

export default function CsvUploadPage() {
  return <CsvUploadComponent />
}