const fs = require('fs')
const pdf = require('html-pdf')

module.exports = {
  async create (req, res) {

    const html = fs.readFileSync('index.html').toString()
        
    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }
  
    pdf.create(html, options).toBuffer((err, buffer) => {
      if(err) return res.json(500).json(err)
      
      return res.end(buffer)          
      // return res.json(html)     
    })
  }
}