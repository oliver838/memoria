const emojiRange =[129380,129452]

function emojiArr(nr){
    let emojis=[]
    for(let i = emojiRange[0];i<=emojiRange[1];i++){
        emojis.push(String.fromCodePoint(i))
    }
    emojis.sort(()=>Math.random()-0.5)
    return emojis.splice(0,nr)
}