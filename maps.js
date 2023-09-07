/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': "⬛",
    'Z': "🔲",
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
    ZI----ZZZZ
    ZXJXX---JZ
    ZX----X--Z
    ZX-XXXXX-Z
    ZX-------Z
    ZX-XXX-XXZ
    ZX-----X-Z
    ZXXXV-VX-Z
    ZX------OZ
    ZZZZZZZZZZ
  `);
  maps.push(`
    V--------V
    V-ZXAXAZ-V
    V-X----X-V
    V-A-XZ-A-V
    V-X-AI-X-V
    V-A-XAXZ-V
    V-X------V
    V-ZXJXAXZV
    V-------OV
    VZZZZZZZZV
  `);
