import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '../downloaddesign/PDFViewerDesign.css'

function PDFViewer() {
    const [pdfFile, setPDFFile] = useState(null)
    const [viewPdf, setViewPdf] = useState(null)

    const fileType = ['application/pdf']
    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
        if(selectedFile){
            if(selectedFile && fileType.includes(selectedFile.type)){
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            }else{
                setPDFFile(null);
            }
        }else{
            console.log("Please select")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(pdfFile !== null){
            setViewPdf(pdfFile);
        }else{
            setViewPdf(null);
        }
    }

    const newplugin = defaultLayoutPlugin()
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <input type="file" className='form-control' onChange={handleChange}/>
            <div className="d-flex justify-content-start">
	            <button type="submit" class="btn btn-success">View File</button>
	        </div>
            <div className='pdf-container'>
            <Worker workerUrl = "https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                {viewPdf && <>
                    <Viewer fileUrl = {viewPdf} plugins = {[newplugin]}/>
                </>   
                }
                {!viewPdf && <>No PDF File</>}
            </Worker>
        </div>
        </form> 
    </div>
  )
}

export default PDFViewer;