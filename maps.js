/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': "⬛",
    'Z': "🔲",
    "M": "🟨",
    "C": "🏝️",
    "A": "⬜",
    "B":"💣",
    "J": "🚧",
    "V": "🔳",
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '❤️',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXV
    -X---AAAAV
    ---X-AXXXV
    JXXX-AXXXV
    -XXX-AXXXV
    -X---AXXXV
    ---AAAXXXV
    -XXXXXXXXV
    -XXXXXXXXV
    OVVVVVVVVV
  `);
  maps.push(`
    O--------V
    X--AAAAA-V
    XX----XX-V
    X--XX-XB-V
    X-XXX--XXV
    X-XXXX-XXV
    X---XX--XV
    XX-XXXX-XV
    XX--J--IXV
    ZZZZZZZZZV
    `);
  maps.push(`
    I-----JXMV
    CXXXX-XMMV
    CX----XXMV
    CX-XXXXMMV
    CX-----MMV
    CX-XXX-XMV
    CX-----XMV
    CXXJX-XXMV
    CX-----OMV
    CZZZZZZZZV
  `);
  maps.push(`
    ZI----ZZZZ
    ZXXXX---JZ
    ZX----X--Z
    ZX-XXXXX-Z
    ZX-------Z
    ZX-XXX-XXZ
    ZX-----X-Z
    ZXXJV-VX-Z
    ZX------OZ
    ZZZZZZZZZZ
  `);
