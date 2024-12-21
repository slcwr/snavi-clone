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
      //本番環境用
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products/upload/csv`,  {
        method: 'POST',
        headers: {
          //'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          //'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
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


    // // URLにクエリパラメータを正しく設定
    // const url = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/products`);
    // url.searchParams.append('id', `eq.${updatedRow.id}`);

    // const response = await fetch(url.toString(), {
    //     method: 'PATCH',
    //     headers: {
    //         'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    //         'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    //         'Content-Type': 'application/json',
    //         'Prefer': 'return=minimal'
    //     },
    //     body: JSON.stringify(updateData)
    // });



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