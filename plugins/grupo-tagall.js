let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@meloncita.ff ${pesan}`
let teks = `*𝙐𝙣 𝘽𝙤𝙩 𝙞𝙣𝙫𝙞𝙩𝙖 𝙖 𝙤𝙩𝙧𝙤 𝙗𝙤𝙩 𝙖 𝙙𝙞𝙫𝙚𝙧𝙩𝙞𝙧𝙨𝙚 🤩*\n${oi}\n\n*MENCIONES:*\n`
for (let mem of participants) {
teks += `💙👻 » @${mem.id.split('@')[0]}\n`}
teks += `${wm}`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
