/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': "🟩",
    'Z': "🔲",
    "M": "🟨",
    "C": "🏝️",
    "J": "🚧",
    "V": "🟦",
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '❤️',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
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
    ZZZZI-ZZZZ
    ZXXXX---XZ
    ZX----X--Z
    ZX-XXXXX-Z
    ZX-------Z
    ZX-XXX-XXZ
    ZX-----X-Z
    ZXXJX-XX-Z
    ZX------OZ
    ZZZZZZZZZZ
  `);
