'use client';
import { useCSVReader } from 'react-papaparse'
import { useState, useEffect } from 'react'
import styles from './CsvUploadComponent.module.scss'

const CsvUploadComponent = () => {
  const [mounted, setMounted] = useState(false)
  const { CSVReader } = useCSVReader()
  const [csvData, setCsvData] = useState<any[]>([])
  const [showConfirmation, setShowConfirmation] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const formatCsvData = (data: any[]) => {
    const headers = data[0];
    return data.slice(1).map(row => {
      const obj: any = {};
      headers.forEach((header: string, index: number) => {
        // boolean値の変換
        if (header === 'isActive') {
          obj[header] = row[index].toLowerCase() === 'true';
        } else {
          obj[header] = row[index];
        }
      });
      return obj;
    });
  };

  const handleUpload = async () => {
    try {
      const formattedData = formatCsvData(csvData);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/upload/csv`,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formattedData }),
      });
      if (response.ok) {
        alert('アップロード成功');
        setShowConfirmation(false);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      
    }
  };

  if (!mounted) return null

  return (
    <div className={styles.container}>
      {!showConfirmation ? (
        <CSVReader
          onUploadAccepted={(results: any) => {
            setCsvData(results.data);
            setShowConfirmation(true);
          }}
        >
          {({getRootProps, acceptedFile}: any) => (
            <div {...getRootProps()} className={styles.dropzone}>
              {acceptedFile ? acceptedFile.name : 'CSVファイルをドラッグ＆ドロップまたはクリックして選択'}
            </div>
          )}
        </CSVReader>
      ) : (
        <div className={styles.confirmationContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                {csvData[0]?.map((header: string, index: number) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.slice(1).map((row: string[], rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.map((cell: string, cellIndex: number) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button 
            onClick={handleUpload}
            className={styles.uploadButton}
          >
            アップロード実行
          </button>
        </div>
      )}
    </div>
  );
};

export default CsvUploadComponent