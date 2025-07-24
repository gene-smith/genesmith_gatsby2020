import React from 'react'

const PrintableResume = React.forwardRef(({ resumeData }, ref) => {
  if (!resumeData) return null

  const { experience, education, skills, certifications } = resumeData

  return (
    <div
      ref={ref}
      className='printable-resume max-w-4xl mx-auto bg-white text-black p-8'
      style={{ minHeight: '11in' }}
    >
      {/* Header */}
      <div className='text-center mb-8 border-b-2 border-gray-800 pb-6'>
        <h1 className='text-4xl font-bold mb-2'>Gene Smith</h1>
        <p className='text-lg text-gray-700'>Software Engineer & Developer</p>
      </div>

      {/* Two-column layout for print */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Left Column */}
        <div className='space-y-6'>
          {/* Experience Section */}
          {experience && experience.length > 0 && (
            <section className='break-inside-avoid'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b border-gray-400 pb-1'>
                EXPERIENCE
              </h2>
              <div className='space-y-4'>
                {experience.map((exp, index) => (
                  <div key={index} className='break-inside-avoid'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {exp.position}
                    </h3>
                    <h4 className='text-base font-medium text-gray-700'>
                      {exp.company}
                    </h4>
                    <p className='text-sm text-gray-600 mb-2'>{exp.duration}</p>
                    {exp.details && (
                      <p className='text-sm text-gray-800 leading-relaxed'>
                        {exp.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {education && education.length > 0 && (
            <section className='break-inside-avoid'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b border-gray-400 pb-1'>
                EDUCATION
              </h2>
              <div className='space-y-3'>
                {education.map((edu, index) => (
                  <div key={index} className='break-inside-avoid'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {edu.degree}
                    </h3>
                    <h4 className='text-base font-medium text-gray-700'>
                      {edu.institution}
                    </h4>
                    <p className='text-sm text-gray-600'>{edu.duration}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className='space-y-6'>
          {/* Skills Section */}
          {skills && skills.length > 0 && (
            <section className='break-inside-avoid'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b border-gray-400 pb-1'>
                SKILLS
              </h2>
              <div className='grid grid-cols-2 gap-2'>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className='text-sm py-1 px-2 bg-gray-100 text-gray-800 rounded border'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Section */}
          {certifications && certifications.length > 0 && (
            <section className='break-inside-avoid'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4 border-b border-gray-400 pb-1'>
                CERTIFICATIONS
              </h2>
              <div className='space-y-3'>
                {certifications.map((cert, index) => (
                  <div key={index} className='break-inside-avoid'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {cert.title}
                    </h3>
                    <div className='flex justify-between items-center'>
                      <p className='text-base font-medium text-gray-700'>
                        {cert.issuer}
                      </p>
                      <p className='text-sm text-gray-600'>{cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          .printable-resume {
            max-width: none !important;
            margin: 0 !important;
            padding: 0.5in !important;
            box-shadow: none !important;
            background: white !important;
            color: black !important;
            font-size: 11pt !important;
            line-height: 1.3 !important;
          }
          
          .printable-resume h1 {
            font-size: 24pt !important;
            margin-bottom: 8pt !important;
          }
          
          .printable-resume h2 {
            font-size: 14pt !important;
            margin-bottom: 6pt !important;
            margin-top: 12pt !important;
          }
          
          .printable-resume h3 {
            font-size: 12pt !important;
            margin-bottom: 2pt !important;
          }
          
          .printable-resume h4 {
            font-size: 11pt !important;
            margin-bottom: 2pt !important;
          }
          
          .printable-resume p {
            margin-bottom: 4pt !important;
            font-size: 10pt !important;
          }
          
          .printable-resume .grid {
            display: block !important;
          }
          
          .printable-resume .grid > div {
            margin-bottom: 16pt !important;
          }
          
          .printable-resume .break-inside-avoid {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          
          /* Hide everything else when printing from the main page */
          body * {
            visibility: hidden;
          }
          
          .printable-resume,
          .printable-resume * {
            visibility: visible;
          }
          
          .printable-resume {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  )
})

PrintableResume.displayName = 'PrintableResume'

export default PrintableResume
