import ReactEcharts from 'echarts-for-react/'
import { useState } from 'react'
// import echarts from 'echarts/types/dist/echarts'
import './chart.css'

import pdfConverter from 'jspdf';
import html2canvas from 'html2canvas';
import puppeteer from 'puppeteer'




//render a echarts based on its type
function RenderEcharts(props){
    var b=props.type
    const data=props.data
    const title=(props.title!=null)?(props.title):''
    const height=(props.height!=null)?props.height:80
    
    
    const line={
      title:title,
      legend:props.legend,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          
          type: props.type,
          
          
          
          label: {
            show: false,
            position: 'center'
          },
          
          
          data:data,
          // itemStyle: {normal: {color: '#00D2AA'}},
        }
      ],
      height:400
    }
    const pie={
      title:title,
        legend:props.legend,
        
        series: [
          {
            
            type: props.type,
            radius: [props.radius, '70%'],
            // avoidLabelOverlap: false,
            
            label: {
              show: false,
              position: 'center'
            },
            // labelLine: {
            //       show: false
            //     },
            
            
            data:data
          }
        ]
      }
      const bar={
        title:title,
        legend:props.legend,
        xAxis: {
            type: 'category',
            data: ['Deal 1', 'Deal 2', 'Deal 3', 'Deal 4','Deal 5']
            
          },
          yAxis: {
            type: 'value'
          },
        
        series: [
          {
            
            type: props.type,
            
            
            
            label: {
              show: false,
              position: 'center'
            },
            
            
            data:data,
            itemStyle: {normal: {color: '#00D2AA'}},
          }
        ],
        height:height
      }
      const funnel={
        title:title,
        legend:props.legend,
        
        
        series: [
          {
            
            type: props.type,
            left: '10%',
            top: 70,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
              show: false,
              position: 'inside'
            },
            
            
            data:data
          }
        ],
        height:height
        
      }
    
      let options
      if (props.type==='bar') {
        options=bar
      }
      else if(props.type==='line'){
        options=line
      }
      else if(props.type==='pie'){
        options=pie
      }
      else{
        options=funnel
      }
      const[chart,setchart]=useState()
      
      //download a chart as a png
      function gettest(){

        const echartInstance = chart.getEchartsInstance();
        
        const base64 = echartInstance.getDataURL();
        
        
        var link = document.createElement("a");
        link.style.backgroundColor='#ffffff'
        link.download = "Chart";
        link.href = base64;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    // const exportToPDF = async () => {
    //   const page = await phantom.create();
    //   const pageInstance = await page.createPage();
    //   await pageInstance.property('viewportSize', { width: 800, height: 600 });
    //   await pageInstance.open('http://localhost:3000'); // Replace with your app's URL
  
    //   // Render the chart to an image
    //   const chartImage = await pageInstance.evaluate(function () {
    //     return document.getElementsByTagName('canvas')[0].toDataURL('image/png');
    //   });
  
    //   // Generate a PDF from the chart image
    //   await pageInstance.setContent(`<html><body><img src="${chartImage}" /></body></html>`);
    //   const pdfPath = './chart.pdf'; // Specify the path where the PDF will be saved
    //   await pageInstance.render(pdfPath);
  
    //   // Close the page and browser instances
    //   await pageInstance.close();
    //   await page.exit();
  
    //   console.log('Chart exported as PDF:', pdfPath);
    // };


    // const exportToPDF = () => {
    //   // const phantom = window.require('phantom');
  
    //   phantom.create().then(function (ph) {
    //     ph.createPage().then(function (page) {
    //       page.property('viewportSize', { width: 800, height: 600 });
    //       page.open('http://localhost:5173/outlet').then(function (status) {
    //         page.render('./chart.pdf').then(function () {
    //           console.log('Chart exported as PDF');
    //           page.close();
    //           ph.exit();
    //         });
    //       });
    //     });
    //   });
    // };
    function div2pdf() {
    
      
      let input = window.document.getElementsByClassName("div2PDF")[0];
  
      html2canvas(input).then(canvas => {
        const img = canvas.toDataURL("image/png");
        const pdf = new pdfConverter("l", "pt");
        pdf.addImage(
          img,
          "png",
          input.offsetLeft,
          input.offsetTop,
          input.clientWidth,
          input.clientHeight
        );
        pdf.save("chart.pdf");
        
      });
    };

    
    

    // const exportChartToPDF = async () => {
    //   // const puppeteer = require('puppeteer');

    //   const browser = await puppeteer.launch();
    //   const page = await browser.newPage();
    
    //   // Set the viewport size to match the chart dimensions
    //   await page.setViewport({ width: 800, height: 600 });
    
    //   // Open the React app containing the chart
    //   await page.goto('http://localhost:5173/outlet', { waitUntil: 'networkidle2' });
    
    //   // Wait for the chart to load
    //   await page.waitForSelector('#chart');
    
    //   // Take a screenshot of the chart
    //   const chartElement = await page.$('#chart');
    //   const chartScreenshot = await chartElement.screenshot();
    
    //   // Save the screenshot as a PDF file
    //   await page.pdf({ path: 'chart.pdf', format: 'A4' });
    
    //   await browser.close();
    // };
    

// (async () => {
//   const browser = await puppeteer.launch(); // launch a browser (chromium by default but you can chose another one)
//   const page = await browser.newPage(); // open a page in the browser
//   await page.goto("https://printable-version-of-my-wbe-page.com", {
//     waitUntil: "networkidle2",
//   }); // visit the printable version of your page
//   await page.pdf({ format: "a4", path: "./my_file.pdf" }); // generate the PDF 🎉
//   await browser.close(); // don't forget to close the browser. Otherwise, it may cause performances issues or the server may even crash..
// })();
    
    
    
      
    return(
        <>
        <div className='div2PDF'>
        <ReactEcharts 
        ref={(e) => { setchart(e)}}
        option = {options}
        style={props.style}
        
        />
        <div className='chart' onClick={div2pdf} style={{display:(props.export)?'flex':'none'}}>Export</div>
        </div>

        </>
    )
}

export default RenderEcharts