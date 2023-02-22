let handler = async (m, { conn, usedPrefix: _p, text, command }) => {
   conn.sendMessage(m.chat, {
           title: '',
           text: `Hallo ${'@'+m.sender.split`@`[0]}`.trim(),
           footer:  'Silahkan klik menu, di bawah chat ini',
           buttonText: "Klik Disini",
           "sections": [
            {
              "rows": [{
                "title": `Creator`,
                "description": "Nomor Pemilik Bot",
                "rowId": `${_p}creator`
              }, {
                "title": "Syarat Dan Ketentuan",
                "description": "Harap membaca Peraturan demi kenyamanan kita bersama",
                "rowId": `${_p}rules`
              }, {
                "title": "Speed Bot",
                "description": "Menampilkan kecepatan berjalan bot",
                "rowId": `${_p}ping`
              }, {
                "title": "Donation",
                "description": "Dukung terus dengan cara berdonasi seikhlasnya, untuk mendukung agar bot berjalan 24 jam nonstop tanpa ada kendala",
                "rowId": `${_p}donasi`
              }, {
                "title": "Credits",
                "description": "Terimakasih atas dukungan dan support dari kalian, terimakasih banyak kepada pihak yang terkait dalam pembangunan мυʀѕι∂ вσт-χмℓ ",
                "rowId": `${_p}tqto`
              }],
              "title": "Info Tentang Bot"
            }, {
              "rows": [{
                "title": `Jadi Bot`,
                "description": "Fitur untuk menumpang jadi bot sementara",
                "rowId": `${_p}jadibot`
              }],
              "title": `Update Terbaru`
            }, {
	    rows: [
	    {title: `Tampilkan Semua Menu`, description: `Menampilkan semua fitur yang terdapat pada bot`, rowId: `.allmenu `}],
                                "title": "Daftar Menu"
                            }],
          mentions: [m.sender]
          }, { 
          	   quoted: m, 
                 contextInfo: {
                     stanzaId: m.key.id,
                     participant: m.sender
                 }
             }
      )
}

handler.help = ['menu']
handler.command = /^(menu|help|\?)$/i
handler.register = false

export default handler
