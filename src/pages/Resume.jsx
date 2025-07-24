import React, { useState, useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { FiDownload, FiPrinter } from 'react-icons/fi'
import Appbar from '../components/Appbar'
import ResumeSection from '../components/ResumeSection'
import PrintableResume from '../components/PrintableResume'
import { loadYamlData } from '../utils/yamlLoader'

export default function Resume() {
  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const printableResumeRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => printableResumeRef.current,
    documentTitle: 'Gene_Smith_Resume',
    removeAfterPrint: false,
    onBeforeGetContent: () => {
      // Ensure the printable component is ready
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 300)
      })
    },
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      @media print {
        html, body {
          height: initial !important;
          overflow: initial !important;
        }
      }
    `,
  })

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        const data = await loadYamlData('resume.yaml')
        setResumeData(data)
      } catch (err) {
        console.error('Error loading resume data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadResumeData()
  }, [])

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className='max-w-7xl mx-auto px-4'>
          <div className='my-12'></div>
          <div className='text-6xl font-bold text-brand mb-8'>Resume</div>
          <div className='text-gray-600 dark:text-gray-400 text-xl'>
            <p>Loading resume data...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Appbar />
        <div className='max-w-7xl mx-auto px-4'>
          <div className='my-12'></div>
          <div className='text-6xl font-bold text-brand mb-8'>Resume</div>
          <div className='text-red-600 dark:text-red-400 text-xl'>
            <p>Error loading resume data: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <Appbar />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Responsive vertical spacing */}
        <div className='my-8 sm:my-12 lg:my-16'></div>

        {/* Header with Download Options */}
        <div className='flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16'>
          <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand'>
            Resume
          </div>

          {/* Download Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>
            {/* Print/Save as PDF Button */}
            <button
              onClick={handlePrint}
              className='flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-brand text-white rounded-lg hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 dark:focus:ring-offset-dark transition-all font-medium text-sm sm:text-base w-full sm:w-auto sm:min-w-[180px]'
              title='Print or save as PDF'
              aria-label='Print or save resume as PDF'
            >
              <FiPrinter className='w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' />
              <span className='whitespace-nowrap'>Print/Save PDF</span>
            </button>

            {/* Direct PDF Download Button */}
            <a
              href={`${import.meta.env.BASE_URL || '/'}resume.pdf`.replace(
                /\/+/g,
                '/'
              )}
              download='Gene_Smith_Resume.pdf'
              className='flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-dark transition-all font-medium text-sm sm:text-base w-full sm:w-auto sm:min-w-[180px] no-underline'
              title='Download pre-generated PDF'
              aria-label='Download pre-generated resume PDF'
            >
              <FiDownload className='w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' />
              <span className='whitespace-nowrap'>Download PDF</span>
            </a>
          </div>
        </div>

        <ResumeSection resumeData={resumeData} />

        {/* Hidden Printable Resume Component */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <PrintableResume ref={printableResumeRef} resumeData={resumeData} />
        </div>
      </div>
    </div>
  )
}
