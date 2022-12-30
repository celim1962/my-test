const { GoogleSpreadsheet } = require('google-spreadsheet');
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const getAllFile = async () => {
    const docID = '158FnoMyLjp6QTepxeILR2saClg0egWnl5TlyDmCUICs'
    const sheetID = '0'
    const result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = {
  "type": "service_account",
  "project_id": "sublime-delight-290008",
  "private_key_id": "c56914175bd8e7dee11f024a50d163212fc29aad",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC/r1foCtalUDBw\nrTTgwCKnAvdf8fzcavwge15MtNQ2S+urVadTh0thnW6gB/BX0pZ9TXI2jWoHElhx\nFHJRbRRf97ovdSeyWeNNwlw7i1k1Z1AnoAK/3EZJEDT0haxFTw8GlUKHKjwwT9yX\nQGoSgdADJJJ1hVasBA9FRUqc8NujM8rmp+JTgrPACykUhMU9WFrKC9ls+xWJG2PN\nBUmQwQrjFEnAlGBfI/j0OPlagWO8XZBC3/jYkkd0L/ySrXHI3RBv/1IXsippJLD+\nBadq4y6zbWKXOzmujirYs+1ilkfZ3LrysKs/rSqBMXPPmQX47jHvKzKGQ6e0OE21\no6t2QiODAgMBAAECggEAIROz2qHMKlitEzSAVGwzTpiPcWoDlVGM0loXiqsFl50A\nPN+Z8Sr+kgilp03XZoA7YcH0fH9olXHP+ytpEq38/xZzdW8E+5zRQYDRg6DnMvTx\n+vR8pPjw0/jM+oj6kjczQ5KMGWDrY/bT/PGrnCf0aiZsc4Uf0K0eqXhsiKpzbDTd\npcGabYBz1C7wlf6AfK3fE+uh52fb0rIeoD9xY155eKwDZWESV7AWq3NnX7oo+Mw1\nEfelcAI0e/kdyjqk4VlseXhZhF9i1Fc/qreOHujivJFm5JVowFCxTbPK2hqS6+ek\nQkTDzZyyVSEHVJkyPzfNkR8RQajAKmFvbiLs8QZTIQKBgQD85oEDdW9L2oK/TyzT\nae31nJHAvjTXMhd3iHDauLH/HF3NqbhPUip3PcOHetlPiwFZTrbixNRit6oVVSgo\nrvLHJDSGsHxBP+8+/an4lty1rGVuYrOrYTYWD7l6jEx+5ANseF9k7bgna9bZKWif\nrZachTYf4avIjJvNT+PBzTYrUQKBgQDCCMVTA8TTbgnJtRDPDTMH8PPdK2sOoaxE\nC5QlnjmJ+SjMmYJFxv6Rujb+ZnJkH9ueJrE81tWJr+DLqSvve22EG+WHaIxhAa7e\ngCNX8AEX3CGRgke8K6xMgg4P6ptBIOQw8FKhmyFzDJXVlNCPB/8UF2LrvIUteagB\nXoU8fVoEkwKBgQCZWjzJGCDQ4kN+Nkh8OjOtR6+qLKxmAV3xga7NMknc5BqNZ2j3\n0F8nxzAVqwyzCxtaSDzl7WzMH4rnPKgJY2ycDPw84C+4cUhl7fNvZiuXjl5DPV6t\ngVkGr6pNAV4xY5of4C4YSX3tiZrSPCXRDbXSW4SieHluNrUTHmqBTiqWwQKBgQC6\n/OLUZnxm2NNb7D8/mdPE4mLQkEgCeLFffd0OB5Yhrdiwm3scrXGklFTtA2NXtA/c\nMCN7ovl0T+cNvYEWr9bRimS/AnTOA2Y3DDuDQkp7aOt8o5Vn9Jp9vJO6qPdnY0Al\nHWQ0UyCAE+/NPTVjsWwTO5pb3XhmY6gRcbpqmc6HOwKBgQCNviU/u1KHm1lnFXSY\nyXIeNlOLJQIqnWn8VEFHYg9lNsC2hT6HS+j7c3iV7IO9jLzeFcGF1VDd3hOqjXu6\nJgJMzQzEy9yck+2/wdjrVAshHMNtJ38k59EJSGQI1qI6LGjEs+G5stdBTpYrggrP\ng11jWw0BMPOxNekPypL0fb6TGg==\n-----END PRIVATE KEY-----\n",
  "client_email": "ethan-799@sublime-delight-290008.iam.gserviceaccount.com",
  "client_id": "110192718958836651470",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ethan-799%40sublime-delight-290008.iam.gserviceaccount.com"
};

    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheet = doc.sheetsById[sheetID];
    const rows = await sheet.getRows();

    for (row of rows) {
        result.push(row._rawData);
    }
    return result
}

app.get('/', (req, res) => res.send(`hello`))

app.get('/test',(req,res)=>{
  return res.json('123test')
})

app.get('/getAllFile', async (req, res) => {
    let result = await getAllFile()
    return res.json(result)
})

app.listen(port, () => {
    console.log(`listing on port ${port}`)
})


